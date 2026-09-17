#!/usr/bin/env python3
"""Anteprima locale de Il Casale.

  Porta 8080  →  sito web (index.html)
  Porta 8081  →  menù QR da tavolo (menu.html)

Uso:
  python3 serve.py
  python3 serve.py --site-only
  python3 serve.py --menu-only
"""
from __future__ import annotations

import argparse
import functools
import os
import sys
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE_PORT = 8080
MENU_PORT = 8081


class SiteHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("[sito %s] " % SITE_PORT + (fmt % args) + "\n")


class MenuHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("[menu %s] " % MENU_PORT + (fmt % args) + "\n")

    def do_GET(self):
        if self.path in ("/", "/index.html"):
            self.path = "/menu.html"
        return SimpleHTTPRequestHandler.do_GET(self)

    def do_HEAD(self):
        if self.path in ("/", "/index.html"):
            self.path = "/menu.html"
        return SimpleHTTPRequestHandler.do_HEAD(self)


def bind(port, handler):
    Handler = functools.partial(handler, directory=ROOT)
    try:
        httpd = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    except OSError as err:
        print("Porta %s non disponibile: %s" % (port, err), file=sys.stderr)
        return None
    print("http://127.0.0.1:%s/" % port)
    return httpd


def main():
    parser = argparse.ArgumentParser(description="Anteprima Il Casale")
    parser.add_argument("--site-only", action="store_true")
    parser.add_argument("--menu-only", action="store_true")
    args = parser.parse_args()

    os.chdir(ROOT)
    servers = []

    if not args.menu_only:
        site = bind(SITE_PORT, SiteHandler)
        if site:
            servers.append(site)
            print("Sito web  →  porta %s" % SITE_PORT)
    if not args.site_only:
        menu = bind(MENU_PORT, MenuHandler)
        if menu:
            servers.append(menu)
            print("Menù QR   →  porta %s  (apre menu.html)" % MENU_PORT)

    if not servers:
        sys.exit(1)

    threads = []
    for httpd in servers[1:]:
        t = threading.Thread(target=httpd.serve_forever, daemon=True)
        t.start()
        threads.append(t)

    try:
        servers[0].serve_forever()
    except KeyboardInterrupt:
        print("\nStop.")
    finally:
        for httpd in servers:
            httpd.shutdown()


if __name__ == "__main__":
    main()
