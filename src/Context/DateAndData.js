import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DateAndDataContext = createContext();

export const DateAndDataProvider = ({ children }) => {

  let fetchedData = [];
  
  const load = async () => {
    try {
      let data = await AsyncStorage.getItem("dateAndData");
      if (data !== null) {
		console.log("The retrevied data: ", data);
        setDateAndData(JSON.parse(data));
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const [dateAndData, setDateAndData] = useState(fetchedData);



  const contextValue = { dateAndData, setDateAndData };
  return (
    <DateAndDataContext.Provider value={contextValue}>
      {children}
    </DateAndDataContext.Provider>
  );
};

/*
	[
		{
			id: 1,
			date: "2021-10-10",
			data: {
				"البولس: "بيتر جوزيف",
				"الكاثوليكون: "بيتر جوزيف",
				"الإنجيل: "بيتر جوزيف",
				"الأبركسيس: "بيتر جوزيف",
				"شماس 1": "بيتر جوزيف",
				.
				.
				.
			}
		},
		{
			id: 2,
			date: "2021-10-10",
			data: : {
				"البولس: "بيتر جوزيف",
				"الكاثوليكون: "بيتر جوزيف",
				"الإنجيل: "بيتر جوزيف",
				"الأبركسيس: "بيتر جوزيف",
				.
				.
				.
			}
		},
	]
*/
