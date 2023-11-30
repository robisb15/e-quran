import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class DaftarSurat extends Component {
  state = {
    surat: [],
  };

  getApi() {
    axios.get("https://equran.id/api/v2/surat").then((result) => {
      this.setState({ surat: result.data.data });
    });
  }
  componentDidMount() {
    this.getApi();
  }
 
  render() {
    console.log(this.props)
    return (
      <>
        <div className="flex m-8 flex-col justify-center items-center">
          <h1 className="flex m-8 text-5xl justify-center items-center">
            Daftar Surah
          </h1>
          <div className="m-4 grid gap-4 grid-cols-3">
            {this.state.surat.map((surat) => {
              return (
                <>
                  <Link to={`/Surah/${surat.nomor}`} >
                    <div className="card w-96 bg-emerald-300 shadow-xl " key={surat.id}>
                      <div className="card-body text-gray-800 ">
                        <h2 className="card-title"></h2>
                        <h2>
                          <i>{surat.nomor}. </i>
                          {`${surat.namaLatin} (${surat.arti})`}
                        </h2>
                        <p>{`${surat.tempatTurun} , Jumlah Ayat ${surat.jumlahAyat}`}</p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default DaftarSurat;
