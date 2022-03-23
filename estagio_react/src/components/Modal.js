import React from 'react';
import { motion } from "framer-motion"
import { CgCloseO } from 'react-icons/cg'
import '../styles/modal.css'

export default function Modal(props){
    return <motion.div variants={dropIn}
            class="modal_wrapper"
            initial="hidden"
            animate="visible"
            exit="exit">
            <button 
              type="button" 
              class="close_btn"
              onClick={() => props.close()}><CgCloseO color="red" fontSize={32}/></button>
        {props.children}
    </motion.div>
}

const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 250,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 250,
      },
    },
  };