import Main from "@/components/Main";
// import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";
// import { useDispatch, useSelector } from "react-redux";
import { Provider } from 'react-redux';
import store from '../redux/store';


export default function Home() {
  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <>
          <Provider  store={store}>
    <Main/>
    </Provider>
    
      <Head>
        <title>Boilerplate</title>
      </Head>


    </>
  );
}
