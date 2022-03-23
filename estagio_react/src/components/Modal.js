import { motion } from "framer-motion"
export default function Modal(props){
    return <motion.div variants={dropIn}
            style={{position: 'absolute', inset: 0, background: '#fff'}}
            initial="hidden"
            animate="visible"
            exit="exit">
            <button type="button" style={{position: 'absolute', right: '50%', top: '-5%'}} onClick={() => props.close()}>x</button>
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
      y: "-100vh",
      opacity: 0,
    },
  };