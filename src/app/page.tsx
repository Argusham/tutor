import Image from "next/image";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home() {
  return (
    <PrimeReactProvider>
      <div className="">
        <h1>Hello World</h1>
      </div>
    </PrimeReactProvider>
  );
}
