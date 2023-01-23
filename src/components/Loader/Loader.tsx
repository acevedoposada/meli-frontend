import Lottie from 'react-lottie-player';
import { AnimatePresence, motion } from 'framer-motion';

import loadingAnimation from 'assets/animations/loading.json';
import { FC } from 'models/common';

import { LoaderProps } from './Loader.interface';
import styles from './Loader.module.scss';
import clsx from 'clsx';

const Loader: FC<LoaderProps> = ({ open, variant = 'transparent' }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(styles['Loader'], styles[`Loader--${variant}`])}
        >
          <Lottie
            loop
            play
            animationData={loadingAnimation}
            className={styles['Loader__animation']}
          />
          <p className={styles['Loader_title']}>Cargando</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
