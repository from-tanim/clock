$(document).ready(function () {
    $('#infoForm').on('submit', function (e) {
        e.preventDefault();

        const idNo = $('#idNo').val();
        const name = $('#name').val();
        const fatherName = $('#fatherName').val();
        const motherName = $('#motherName').val();
        const dob = $('#dob').val();
        const bloodGroup = $('#bloodGroup').val();

        const qrData = `ID No: ${idNo}\nName: ${name}\nFather's Name: ${fatherName}\nMother's Name: ${motherName}\nDOB: ${dob}\nBlood Group: ${bloodGroup}`;

        $('#qrcode').empty().qrcode({
            text: qrData,
            width: 200,
            height: 200
        });

        $('#downloadBtn').show().off('click').on('click', function () {
            const canvas = $('#qrcode canvas')[0];
            const pngUrl = canvas.toDataURL("image/png");

            const downloadLink = document.createElement('a');
            downloadLink.href = pngUrl;
            downloadLink.download = 'qrcode.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
});
