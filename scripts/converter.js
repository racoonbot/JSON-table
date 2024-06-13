let processedData = [];

function processFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContent = event.target.result;
    const lines = fileContent.split("\n");

    processedData = [];
    // Del_/_Cut_Primary
    lines.forEach((line) => {
      if (line.includes("Del_/_Cut_Primary")) {
        const cleanedLine = line.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        const del_prim = cleanedLine.split(
          / |_-_|_:_|:_|_-_|_#_|:_'|e:_'|',_ID:_'|',_Title:'|Playlist_on_/
        );

        //console.log(del_prim);
        del_prim[29] = del_prim[29].replace("Title:'", ""); // add
        del_prim[29] = del_prim[29].replace("'_", ""); // add
        let date = del_prim[0];
        let time = del_prim[1];
        let server = del_prim[23];
        let list = del_prim[24];
        let action = del_prim[25];
        let pl_Time = del_prim[27];
        let pr_id = del_prim[28];
        let wp = del_prim[33];
        let title = del_prim[30] + " " + del_prim[31] + "\n" + del_prim[32];
        let substringToRemove = "List:_";
        let server2 = server.replace(substringToRemove, "");
        let found = false;

        if (typeof del_prim[33] !== "string" || !del_prim[33].includes("WP")) {
          del_prim.forEach(function (fruit, index) {
            if (
              index !== 33 &&
              typeof fruit === "string" &&
              fruit.includes("WP")
            ) {
              del_prim[33] = fruit;
              found = true;
            }
          });
        }

        if (!found) {
          // console.log("Текст WP не найден в других элементах массива.");
        }

        const json = {
          Date: del_prim[0],
          Time: del_prim[1],
          Action: del_prim[26],
          pr_id: del_prim[29],
          Server: del_prim[24],
          List: del_prim[25],
          pl_Time: del_prim[28],
          WP: del_prim[33],
          title: title,
        };

        processedData.push(json);
      }
      // Del_/_Cut_Secondary
      else if (line.includes("Del_/_Cut_Secondary")) {
        const cleanedLine = line.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        const del_secondary = cleanedLine.split(
          / |_-_|_:_|_#_|_'|',_ID:_'|',_|Playlist_on_/
        );
        if (
          typeof del_secondary[39] === "undefined" ||
          !del_secondary[39].includes(" WP")
        ) {
          del_secondary[39] = del_secondary[41];
        }
        del_secondary[29] = del_secondary[29].replace("Title:'", ""); // add
        del_secondary[29] = del_secondary[29].replace("'_", ""); // add
        let server = del_secondary[23].replace("List:_", "");
        //console.log(del_secondary);
        const json = {
          Date: del_secondary[0],
          Time: del_secondary[1],
          Server: server,
          List: del_secondary[24],
          Action: del_secondary[25],
          pl_Time: del_secondary[27],
          pr_id: del_secondary[28],
          WP: del_secondary[39],
          title: del_secondary[29],
        };
        processedData.push(json);
        //Toggle_hard_start
      } else if (line.includes("Toggle_hard_start")) {
        const cleanedLine = line.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        const hd_strt = cleanedLine.split(
          / | - | |_in_| - |',_ID:_'|,_|Playlist_on_/
        );

        let date = hd_strt[0];
        let time = hd_strt[1];
        let server = hd_strt[19];
        let list = hd_strt[21];
        let action = hd_strt[18];
        let pr_id = hd_strt[22];
        let wp = hd_strt[24];
        let title = hd_strt[26];

        const json = {
          Date: date,
          Time: time,
          Server: server,
          List: list,
          Action: action,
          pr_id: pr_id,
          WP: wp,
          title: hd_strt[26],
        };
        processedData.push(json);
        // AppendList
      } else if (line.includes("AppendList")) {
        const cleanedline = line.replace(/[\x00-\x1F\x7F-\x9F]/g, ""); //
        const App_List = cleanedline.split(
          / |_-_|_:_|_#_|_:_|\\|_in_|_-_|Playlist_on_/
        );
        JSON.stringify(App_List);
        console.log(App_List);

        let date = App_List[0];
        let time = App_List[1];
        let server = App_List[35];
        let list = App_List[33];
        let action = App_List[26];
        let wp = App_List[31];

        let substringToRemove = "List:_";
        let server2 = server.replace(substringToRemove, "");

        // console.log(
        // App_List[0],
        // App_List[1],
        // App_List[23],
        // App_List[24],
        // App_List[26],
        // App_List[27],
        // App_List[28],
        //  App_List[31]
        // );
        const json = {
          Date: App_List[0],
          Time: App_List[1],
          Server: App_List[35],
          List: App_List[33],
          Action: App_List[26],
          WP: App_List[31],
        };

        processedData.push(json);
        // Copy_Secondary
      } else if (line.includes("Copy_Secondary")) {
        const cleanedLine = line.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        const Copy_Sec = cleanedLine.split(
          / |_-_|_:_|:_|_-_|_#_|:_'|e:_'|',_ID:_'|',_Title:'|Playlist_on_/
        );

        //console.log(Copy_Sec);
        Copy_Sec[29] = Copy_Sec[29].replace("Title:'", ""); // add
        Copy_Sec[29] = Copy_Sec[29].replace("'_", ""); // add
        let date = Copy_Sec[0];
        let time = Copy_Sec[1];
        let server = Copy_Sec[23];
        let list = Copy_Sec[24];
        let action = Copy_Sec[25];
        let pl_Time = Copy_Sec[27];
        let pr_id = Copy_Sec[28];
        let wp = Copy_Sec[33];
        let title = Copy_Sec[30] + " " + Copy_Sec[31] + "\n" + Copy_Sec[32];
        let substringToRemove = "List:_";
        let server2 = server.replace(substringToRemove, "");
        let found = false;

        if (typeof Copy_Sec[33] !== "string" || !Copy_Sec[33].includes("WP")) {
          Copy_Sec.forEach(function (fruit, index) {
            if (
              index !== 33 &&
              typeof fruit === "string" &&
              fruit.includes("WP")
            ) {
              Copy_Sec[33] = fruit;
              found = true;
            }
          });
        }

        //if (!found) {
        // console.log("Текст WP не найден в других элементах массива.");
        //}

        const json = {
          Date: Copy_Sec[0],
          Time: Copy_Sec[1],
          Action: Copy_Sec[26],
          pr_id: Copy_Sec[29],
          Server: Copy_Sec[24],
          List: Copy_Sec[25],
          pl_Time: Copy_Sec[28],
          WP: Copy_Sec[33],
          title: title,
        };

        processedData.push(json);
      }
      // Copy_Primary
      else if (line.includes("Copy_Primary")) {
        const cleanedLine = line.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        const Copy_Prim = cleanedLine.split(
          / |_-_|_:_|_#_|_'|',_ID:_'|',_|Playlist_on_/
        );
        if (
          typeof Copy_Prim[35] !== "string" ||
          !Copy_Prim[35].includes("WP")
        ) {
          Copy_Prim.forEach(function (fruit, index) {
            if (
              index !== 35 &&
              typeof fruit === "string" &&
              fruit.includes("WP")
            ) {
              Copy_Prim[35] = fruit;
              found = true;
            }
          });
        }

        Copy_Prim[29] = Copy_Prim[29].replace("Title:'", ""); // add
        Copy_Prim[29] = Copy_Prim[29].replace("'_", ""); // add
        let server = Copy_Prim[23].replace("List:_", "");
        //console.log(Copy_Prim);
        const json = {
          Date: Copy_Prim[0],
          Time: Copy_Prim[1],
          Server: server,
          List: Copy_Prim[24],
          Action: Copy_Prim[25],
          pl_Time: Copy_Prim[27],
          pr_id: Copy_Prim[28],
          WP: Copy_Prim[35],
          title:
            Copy_Prim[29] +
            " " +
            Copy_Prim[30] +
            "" +
            Copy_Prim[31] +
            "\n" +
            Copy_Prim[32] +
            "" +
            Copy_Prim[33],
        };
        processedData.push(json);
      } else if (line.includes("Lock_List")) {
        const cleanedline = line.replace(/[\x00-\x1F\x7F-\x9F]/g, ""); //
        const Lk_Lst = cleanedline.split(
          / |_-_|_:_|t:_#_|ts|',_ID:_'|:_|',_|Playlist_on_/
        );
        JSON.stringify(Lk_Lst);
        //console.log(Lk_Lst);

        let date = Lk_Lst[0];
        let time = Lk_Lst[1];
        let server = Lk_Lst[23];
        let list = Lk_Lst[24];
        let action = Lk_Lst[25];
        let pl_Time = Lk_Lst[27];
        let pr_id = Lk_Lst[28];
        let wp = Lk_Lst[31];

        // let substringToRemove = "List:_";
        // let server2 = server.replace(substringToRemove, "");

        // console.log(
        //Lk_Lst[0],
        // Lk_Lst[1],
        // Lk_Lst[23],
        //Lk_Lst[24],
        // Lk_Lst[25],
        // Lk_Lst[27],
        // Lk_Lst[28],
        // Lk_Lst[31]
        // );
        const json = {
          Date: Lk_Lst[0],
          Time: Lk_Lst[1],
          Server: Lk_Lst[24],
          List: Lk_Lst[25],
          Action: Lk_Lst[23],
          // pl_Time: Lk_Lst[27],
          pr_id: Lk_Lst[28],
          WP: Lk_Lst[27],
        };

        processedData.push(json);
        //Unlock_List
      } else if (line.includes("Unlock_List")) {
        const cleanedline = line.replace(/[\x00-\x1F\x7F-\x9F]/g, ""); //
        const Unlk_List = cleanedline.split(
          / |_-_|_:_|t:_#_|ts|',_ID:_'|:_|',_|Playlist_on_/
        );
        JSON.stringify(Unlk_List);
        //console.log(Unlk_List);

        let date = Unlk_List[0];
        let time = Unlk_List[1];
        let server = Unlk_List[23];
        let list = Unlk_List[24];
        let action = Unlk_List[25];
        let pl_Time = Unlk_List[27];
        let pr_id = Unlk_List[28];
        let wp = Unlk_List[31];

        // let substringToRemove = "List:_";
        // let server2 = server.replace(substringToRemove, "");

        // console.log(
        //  Unlk_List[0],
        //Unlk_List[1],
        // Unlk_List[23],
        // Unlk_List[24],
        //  Unlk_List[25],
        // Unlk_List[27],
        // Unlk_List[28],
        // Unlk_List[31]
        //);
        const json = {
          Date: Unlk_List[0],
          Time: Unlk_List[1],
          Server: Unlk_List[24],
          List: Unlk_List[25],
          Action: Unlk_List[23],
          // pl_Time: Unlk_List[27],
          pr_id: Unlk_List[28],
          WP: Unlk_List[27],
        };

        processedData.push(json);
      } //Insert_before
      else if (line.includes("Insert_before")) {
        const cleanedline = line.replace(/[\x00-\x1F\x7F-\x9F]/g, ""); //
        const Inst_bfre = cleanedline.split(
          / |_-_|_:_|t:_#_|ts|',_ID:_'|_#_|:_|',_|ls:_|Playlist_on_/
        );

        JSON.stringify(Inst_bfre);
        // console.log(Inst_bfre);

        let date = Inst_bfre[0];
        let time = Inst_bfre[1];
        let server = Inst_bfre[23];
        let list = Inst_bfre[24];
        let action = Inst_bfre[26];
        let pl_Time = Inst_bfre[27];
        let pr_id = Inst_bfre[28];
        let wp = Inst_bfre[36];
        let title = Inst_bfre[34];
        // let substringToRemove = "List:_";
        // let server2 = server.replace(substringToRemove, "");

        //  console.log(
        // Inst_bfre[0],
        //  Inst_bfre[1],
        //   Inst_bfre[23],
        //  Inst_bfre[24],
        //  Inst_bfre[25],
        //  Inst_bfre[26],
        // Inst_bfre[27],
        // Inst_bfre[28],
        //  Inst_bfre[36],
        //  Inst_bfre[34]
        // );
        const json = {
          Date: Inst_bfre[0],
          Time: Inst_bfre[1],
          Server: Inst_bfre[24],
          List: Inst_bfre[25],
          Action: Inst_bfre[26],
          pl_Time: Inst_bfre[27],
          //pr_id: Inst_bfre[28],
          title: Inst_bfre[34],
          WP: Inst_bfre[36],
        };

        processedData.push(json);
      }
    });
  };

  reader.readAsText(file, "windows-1251");
}

function saveProcessedData() {
  const dataToSave = JSON.stringify(processedData, null, 2);
  const blob = new Blob([dataToSave], {
    type: "application/json; charset=windows-1251",
  });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "обработанные_данные.json";
  a.click();
}
