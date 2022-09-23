import axios from "axios";
import { useState, useEffect } from "react";

const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const URL = "https://translation.googleapis.com/language/translate/v2";
const Convert = ({ language, text }) => {
  const [translted, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        URL,
        {},
        {
          params: {
            key: apiKey,
            q: text,
            target: language.value,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    const id = setTimeout(() => {
      doTranslation();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{translted}</h1>
    </div>
  );
};

export default Convert;
