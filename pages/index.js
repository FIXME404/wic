import Image from 'next/image';
import Logo from '../public/logo-removebg-preview.png';

function Home() {
  const myLoader = () => {
    return `src/public/logo-removebg-preview.png`;
  };

  return (
    <div>
      <Image src={Logo} alt='Robot logo' width={100} height={100} />
    </div>
  );
}

export default Home;
