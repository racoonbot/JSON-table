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
        //let date = del_prim[0];
        // let time = del_prim[1];
        let server = del_prim[23];
        // let list = del_prim[24];
        // let action = del_prim[25];
        //let pl_Time = del_prim[27];
        //let pr_id = del_prim[28];
        // let wp = del_prim[33];
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
