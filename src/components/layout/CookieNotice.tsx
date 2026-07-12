"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "cookie-notice-dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with localStorage, a browser-only API unavailable during SSR
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-forest-950 p-5 text-center text-sm text-linen-50 shadow-xl sm:flex-row sm:justify-between sm:text-left">
            <p>
              Diese Website verwendet nur technisch notwendige Funktionen –
              keine Tracking- oder Marketing-Cookies. Mehr dazu in unserer{" "}
              <Link href="/datenschutz" className="underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <motion.button
              type="button"
              onClick={dismiss}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 rounded-full bg-linen-50 px-5 py-2 text-sm font-medium text-forest-800"
            >
              Verstanden
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
