$(document).ready(() => {
    const url = 'https://raw.githubusercontent.com/techgarden-gg/techgarden-gg.github.io/master/modpacks.json';

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            console.log(result);

            let innerHtml = '';
            
            result.forEach((modpack) => {
                const html = `<div class="modpack">
    <a class="modpack-img" href="${modpack.url}">
        <img src="${modpack.img}" alt="${modpack.name}">
    </a>
</div>
`
                innerHtml += html;
            });

            console.log(innerHtml);

            $('#modpacks').html(innerHtml);

        }, error: (error) => {
            console.error(error);
        }
    });
})