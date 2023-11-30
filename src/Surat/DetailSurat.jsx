import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailSurat() {
    const [surat, setSurat] = useState([]);
    const { id } = useParams();
    const getApi =  () => {
       axios.get(`https://equran.id/api/v2/surat/${id}`).then((result) => {
        setSurat(result.data.data);
      });
    };
    useEffect(() => { getApi() }, []);
      console.log("getapi :", surat);
      return (
        <>
          <h1>tes</h1>
              <h1>{ surat.nomor}</h1>
        </>
      );
    };
export default DetailSurat;
