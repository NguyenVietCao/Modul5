import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <h1>Thông tin COVID-19 tại Việt Nam</h1>
      <table className="table table-striped">   
      <thead>
        <tr>  
        <th>Date</th>
        <th>Confirmed</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
     
            <tr key={item.Date}>  
            <td>
              <p>{item.Date}</p>
            </td>
            <td>
            
              <p>{item.Confirmed}</p>
            </td>
            <td>
        
              <p> {item.Active}</p>
            </td>
            <td>
            
              <p>{item.Recovered}</p>
            </td>
            <td>
              <p> {item.Deaths}</p>
            </td>
            </tr>
       
        ))}
      </tbody>
      </table>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(" http://localhost:8080/data");

    // Lấy dữ liệu từ response.data và trả về data props
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}
