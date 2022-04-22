import { Box } from '@mui/material';
import { SquareLoader } from 'react-spinners';
import styles from './Loading.module.scss';

export default function Component({loading}) {
  return (
    <Box className={styles.loading__wrapper}>
      <SquareLoader color={'#14142b'} loading={loading} size={50} />
    </Box>
  )
}
