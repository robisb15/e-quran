import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DetailSurat() {
  const [surat, setSurat] = useState([]);
  const [ayat, setAyat] = useState([]);
  const { id } = useParams();
  const getApi = () => {
    axios.get(`https://equran.id/api/v2/surat/${id}`).then((result) => {
      setSurat(result.data.data);
      setAyat(result.data.data.ayat);
    });
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(ayat);
  return (
    <>
      <Link to={"/surah"}>
        <button className="btn btn-success mt-5 ml-5">Kembali</button>
      </Link>
      <div className="card bg-lime-100 text-primary-content m-12">
        <div className="card-body">
          <h2 className="card-title">
            Surat {surat.namaLatin} ({surat.nama})
          </h2>
          <p>arti</p>
          <p>{surat.arti}</p>
          {ayat.map((ayat, i) => {
            return (
              <>
                <div
                  className="card bg-lime-300 text-primary-content mb-3"
                  key={i}
                >
                  <div className="card-body">
                    <h2 className="card-title">Ayat {ayat.nomorAyat}</h2>
                    <p className="text-5xl text-right mb-3">{ayat.teksArab}</p>
                    <p className="text-3xl text-right">{ayat.teksLatin}</p>
                    <br></br>
                    <div className="text-xl">
                      <p>arti:</p>
                      <p>{ayat.teksIndonesia}</p>
                      <audio src={ayat.audio["01"]} controls />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default DetailSurat;
