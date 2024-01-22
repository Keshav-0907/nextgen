"use Clinet";

import { motion, AnimatePresence, } from "framer-motion";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"

export const Fmotion = ({children}) =>{
    <>
    <div>
        <AnimatePresence>
            <motion.div>
                {children}
            </motion.div>
        </AnimatePresence>
        
    </div>
    </>
} 