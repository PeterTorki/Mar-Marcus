import React, { createContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { storage } from "./Storage";

export const DateAndDataContext = createContext();

export const DateAndDataProvider = ({ children }) => {
  const [dateAndData, setDateAndData] = useState([]);

  useEffect(() => {
    storage
      .load({
        key: "dateAndData",
      })
      .then((res) => {
		console.log('this is res', res);
        setDateAndData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
