$(document).ready(function () {
    // function formatDateToYMD(date) {
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, "0");
    //     const day = String(date.getDate()).padStart(2, "0");
    //     return `${year}-${month}-${day}`;
    // }

    $("#btnSubmit").on("click", function (e) {
        e.preventDefault();

        let valid = true;
        const fullname = $("#fullname").val().trim();
        const phone = $("#phone").val().trim();
        const email = $("#email").val();
        const payType = $("input[name='payType']:checked").val();
        const flowerType = $("#flowerType").val();
        const dateStr = $("#date").val();
        const date = new Date(dateStr);

        if (!/^([A-Z][a-z]+)(\s[A-Z][a-z]+)+$/.test(fullname)) {
            valid = false;
            $("#errFullname").text("*");
        } else {
            $("#errFullname").text("");
        }

        if (!/^0\d{3}\.\d{3}\.\d{3}$/.test(phone)) {
            valid = false;
            $("#errPhone").text("*");
        } else {
            $("#errPhone").text("");
        }

        const dateNow = new Date();
        if (!date || isNaN(date)) {
            valid = false;
            $("#errDate").text("*");
        } else if (date < dateNow) {
            valid = false;
            $("#errDate").text("*");
        } else {
            $("#errDate").text("");
        }

        if (!/^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/.test(email)) {
            valid = false;
            $("#errEmail").text("*");
        } else {
            $("#errEmail").text("");
        }

        if (!payType) {
            valid = false;
            $("#errPayType").text("*");
        } else {
            $("#errPayType").text("");
        }

        if (valid) {
            const stt = $("table tbody tr").length + 1;
            // const formattedDate = formatDateToYMD(date);

            const newRow = `
            <tr>
                <td>${stt}</td>
                <td>${fullname}</td>
                <td>${phone}</td>
                <td>${dateStr}</td>
                <td>${email}</td>
                <td>${flowerType}</td>
                <td>${payType}</td>
            </tr>`;
            $("table tbody").append(newRow);
            $("#form")[0].reset();
            $("#modalForm").modal("hide");
        }
    });
});
