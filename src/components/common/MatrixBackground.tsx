import { Box } from '@chakra-ui/react';
import { ReactElement, useEffect } from 'react';

const MatrixBackground = ({ children }: { children: ReactElement }) => {
  useEffect(() => {
    const c = document.getElementById('c') as HTMLCanvasElement;
    const ctx = c.getContext('2d');

    c.height = window.innerHeight;
    c.width = window.innerWidth;

    const matrix =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@%$#&*'.split(
        ''
      );

    const font_size = 10;
    const columns = c.width / font_size;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#0F0';
      ctx.font = font_size + 'px arial';

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    };

    const int = setInterval(draw, 33);

    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <canvas
      style={{
        minHeight: '100vh',
        zIndex: -1,
        backgroundColor: 'black'
      }}
      id="c"
    ></canvas>
  );
};

export default MatrixBackground;
