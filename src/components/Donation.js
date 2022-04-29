import React, { useEffect, useState } from "react"
import background from "../images/donation.png"

const api = true;

const Donation = ({load}) => {
  const [value, setValue] = useState(undefined)
  const [frase, setFrase] = useState("")
  useEffect(() => {
      if(load === true && api) {
          window.gapi.client.load("sheets", "v4", () => {
            window.gapi.client.sheets.spreadsheets.values
              .batchGet({
                spreadsheetId: "1ahjKSY_W2Pqf1Oo-RqOgRpA4zNQvo5_2nWbqg-WPK4E",
                ranges: [
                  "Totale!B2:B2",
                  "Frase!A1:A1"
                ]
              })
              .then(response => {
                setValue(response.result.valueRanges[0].values[0])
                setFrase(response.result.valueRanges[1].values[0][0])
              });
          }); 
        }
      }, [load]);

  return <div style={{backgroundImage: `url('${background}')`, backgroundSize: "100% 100%"}} className="w-full h-full relative" >
    <div className="absolute w-[400px] h-[200px] top-[calc(50%-108px)] left-[calc(50%-200px)] flex justify-center items-center">
      {value && <span className="text-large font-bold text-deep-sky-blue-10 leading-[136%]">{value},00€</span>}
      </div>
      {frase && <div className="absolute w-[480px] h-[100px] top-[calc(50%+124px)] left-[calc(50%-240px)] d-flex justify-center items-center text-[15px] text-center">{frase}</div>}
    </div>
}

export default Donation