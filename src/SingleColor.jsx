import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color

  async function copyToClipboard() {
      if(navigator.clipboard) {
      try {
       await navigator.clipboard.writeText(`#${hex}`);
       toast.success('Color copied to clipboard')
     } catch (error) {
       toast.error('Failed to copy text: ', error);
      }
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
