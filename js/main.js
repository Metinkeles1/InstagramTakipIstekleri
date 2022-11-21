window.addEventListener('load', () => {
    follow_requests.then(request => {
        displayRequest(request.relationships_follow_requests_sent);
    })
})

timeConverter = UNIX_timestamp => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Agustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' | ' + hour + ':' + min + ':' + sec;
    return time;
}

displayRequest = requests => {
    let avatarSayi = 1;
    requests.forEach((element, i) => {
        let html = `
        <tr>
        <td style="max-width: 5px;">            
            <i class="d-flex justify-content-center">${i + 1}</i>                        
        </td>
        <td>
            <img src="https://bootdey.com/img/Content/avatar/avatar${avatarSayi}.png" alt="">
            <i class="user-link">${element.string_list_data[0].value}</i>
            <span class="user-subhead">Instagram Kullanıcısı</span>
        </td>
        <td>
			${timeConverter(element.string_list_data[0].timestamp)}
		</td>
        <td class="text-center bg-warning">
            <span class="label label-default ">İstek Gönderildi</span>
        </td>
        <td class="text-center">
            <a target="_blank" href="${element.string_list_data[0].href}" id="request"><i class="fa-brands fa-instagram fa-3x btn"></i></a>
        </td>
        </tr>
        `;
        document.querySelector("#requests").innerHTML += html;
        avatarSayi++;
        (avatarSayi <= 7) ? avatarSayi++ : avatarSayi = 1;
    });
}