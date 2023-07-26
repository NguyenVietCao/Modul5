import axios from 'axios';

export default function Home({ data }) {
  return (
    <div>
      <h1>Thông tin COVID-19 tại Việt Nam</h1>
      {data.map((item) => (
        <div key={item.Date}>
          <h2>Ngày thống kê: {item.Date}</h2>
          <p>Số ca được xác nhận: {item.Confirmed}</p>
          <p>Số ca đang điều trị: {item.Active}</p>
          <p>Số ca đã khỏi: {item.Recovered}</p>
          <p>Số ca tử vong: {item.Deaths}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(
      'https://api.covid19api.com/total/country/vietnam'
    );

    // Lấy dữ liệu từ response.data và trả về data props
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}