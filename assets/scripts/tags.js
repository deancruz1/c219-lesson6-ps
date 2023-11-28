$(function() {
    var searchTags = [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "iOS",
        "Swift",
        "React",
        "Web Design",
        "Web Development"
    ];

    $(".search-bar").autocomplete({
        source: searchTags
    });
});