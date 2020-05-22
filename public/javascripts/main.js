let table = document.getElementById("table");
handleRefreshData = () => {
  $.ajax({
    type: "get",
    url: "/read",
    success: function (response) {
      console.log(response);
      table.app
    },
  });
};
handleRefreshData();

addRowToTable = (currTable, row)=>{
currTable.app
}