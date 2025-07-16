window.addEventListener("load", () => {
    const portal = document.getElementById("portal_button");
    if (portal){
         portal.addEventListener("click", () => {
         window.location.href = "https://www.akc.org/";
    });
}});

function FeedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body =body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

const currentStories = [
    new FeedItem("beagle","This is a description of the beagle dog breed..", "https://www.akc.org/dog-breeds/beagle/"),
    new FeedItem("pomeranian","This is a description of the pomeranian dog breed..", "https://www.akc.org/dog-breeds/pomeranian/"),
    new FeedItem("beagle","This is a description of the beagle dog breed..", "https://www.akc.org/dog-breeds/beagle/"),
];

function createFeedItemHTML(feedItem) {
    return
    <div class="feed-item">
        <h3><a href="${feedItem.linkUrl}" target="_blank">${feedItem.title}</a></h3>
        <img src="${feedItem.imageUrl}" alt="${feedItem.title}">
        <p>${feedItem.body}</p>
        </div>
        ;
}

function displayItem(feedItem) {
}