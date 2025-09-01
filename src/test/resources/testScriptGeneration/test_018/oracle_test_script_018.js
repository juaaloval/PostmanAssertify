valuesToConsiderAsNull = [];
// &200
response = pm.response.json();
// Printing value of response variable
console.log("Printing value of response");
console.log(response);

// Invariants of this nesting level:
// input.author.identities == return.properties.author.identities
pm.test("input.author.identities == return.properties.author.identities", () => {
// Getting value of variable: input_author_identities
input_author_identities = input_author;
if(input_author_identities != null) {
input_author_identities = input_author_identities["identities"];
}
// Printing value of input_author_identities variable
console.log("Printing value of input_author_identities");
console.log(input_author_identities);


// Getting value of variable: return_properties_author_identities
return_properties_author_identities = response["properties"];
if(return_properties_author_identities != null) {
return_properties_author_identities = return_properties_author_identities["author"];
if(return_properties_author_identities != null) {
return_properties_author_identities = return_properties_author_identities["identities"];
}
}
// Printing value of return_properties_author_identities variable
console.log("Printing value of return_properties_author_identities");
console.log(return_properties_author_identities);


if((input_author_identities != null) && (!valuesToConsiderAsNull.includes(input_author_identities)) && (return_properties_author_identities != null) && (!valuesToConsiderAsNull.includes(return_properties_author_identities))) {
pm.expect(input_author_identities).to.eql(return_properties_author_identities);
}
})
// return.id == return.properties.id
pm.test("return.id == return.properties.id", () => {
// Getting value of variable: return_id
return_id = response["id"];
// Printing value of return_id variable
console.log("Printing value of return_id");
console.log(return_id);


// Getting value of variable: return_properties_id
return_properties_id = response["properties"];
if(return_properties_id != null) {
return_properties_id = return_properties_id["id"];
}
// Printing value of return_properties_id variable
console.log("Printing value of return_properties_id");
console.log(return_properties_id);


if((return_id != null) && (!valuesToConsiderAsNull.includes(return_id)) && (return_properties_id != null) && (!valuesToConsiderAsNull.includes(return_properties_id))) {
pm.expect(return_id).to.eql(return_properties_id);
}
})
// return.ratings_count == return.ratings_sum
pm.test("return.ratings_count == return.ratings_sum", () => {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


// Getting value of variable: return_ratings_sum
return_ratings_sum = response["ratings_sum"];
// Printing value of return_ratings_sum variable
console.log("Printing value of return_ratings_sum");
console.log(return_ratings_sum);


if((return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count)) && (return_ratings_sum != null) && (!valuesToConsiderAsNull.includes(return_ratings_sum))) {
pm.expect(return_ratings_count).to.eql(return_ratings_sum);
}
})
// return.ratings_count == return.favourites_count
pm.test("return.ratings_count == return.favourites_count", () => {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


// Getting value of variable: return_favourites_count
return_favourites_count = response["favourites_count"];
// Printing value of return_favourites_count variable
console.log("Printing value of return_favourites_count");
console.log(return_favourites_count);


if((return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count)) && (return_favourites_count != null) && (!valuesToConsiderAsNull.includes(return_favourites_count))) {
pm.expect(return_ratings_count).to.eql(return_favourites_count);
}
})
// size(return.properties_revisions[]) == size(return.properties.tags[])
pm.test("size(return.properties_revisions[]) == size(return.properties.tags[])", () => {
// Getting value of variable: return_properties_revisions_size_array
return_properties_revisions_size_array = response["properties_revisions"];
if(return_properties_revisions_size_array != null) {
return_properties_revisions_size_array = return_properties_revisions_size_array.length;
}

// Printing value of return_properties_revisions_size_array variable
console.log("Printing value of return_properties_revisions_size_array");
console.log(return_properties_revisions_size_array);


// Getting value of variable: return_properties_tags_size_array
return_properties_tags_size_array = response["properties"];
if(return_properties_tags_size_array != null) {
return_properties_tags_size_array = return_properties_tags_size_array["tags"];
}
if(return_properties_tags_size_array != null) {
return_properties_tags_size_array = return_properties_tags_size_array.length;
}

// Printing value of return_properties_tags_size_array variable
console.log("Printing value of return_properties_tags_size_array");
console.log(return_properties_tags_size_array);


if((return_properties_revisions_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_size_array)) && (return_properties_tags_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_tags_size_array))) {
pm.expect(return_properties_revisions_size_array).to.eql(return_properties_tags_size_array);
}
})
// size(return.properties_revisions[]) == size(return.properties.tags[])
pm.test("size(return.properties_revisions[]) == size(return.properties.tags[])", () => {
// Getting value of variable: return_properties_revisions_size_array
return_properties_revisions_size_array = response["properties_revisions"];
if(return_properties_revisions_size_array != null) {
return_properties_revisions_size_array = return_properties_revisions_size_array.length;
}

// Printing value of return_properties_revisions_size_array variable
console.log("Printing value of return_properties_revisions_size_array");
console.log(return_properties_revisions_size_array);


// Getting value of variable: return_properties_tags_size_array
return_properties_tags_size_array = response["properties"];
if(return_properties_tags_size_array != null) {
return_properties_tags_size_array = return_properties_tags_size_array["tags"];
}
if(return_properties_tags_size_array != null) {
return_properties_tags_size_array = return_properties_tags_size_array.length;
}

// Printing value of return_properties_tags_size_array variable
console.log("Printing value of return_properties_tags_size_array");
console.log(return_properties_tags_size_array);


if((return_properties_revisions_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_size_array)) && (return_properties_tags_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_tags_size_array))) {
pm.expect(return_properties_revisions_size_array).to.eql(return_properties_tags_size_array);
}
})
// size(return.properties_revisions[]) == size(return.properties.media_files[])
pm.test("size(return.properties_revisions[]) == size(return.properties.media_files[])", () => {
// Getting value of variable: return_properties_revisions_size_array
return_properties_revisions_size_array = response["properties_revisions"];
if(return_properties_revisions_size_array != null) {
return_properties_revisions_size_array = return_properties_revisions_size_array.length;
}

// Printing value of return_properties_revisions_size_array variable
console.log("Printing value of return_properties_revisions_size_array");
console.log(return_properties_revisions_size_array);


// Getting value of variable: return_properties_media_files_size_array
return_properties_media_files_size_array = response["properties"];
if(return_properties_media_files_size_array != null) {
return_properties_media_files_size_array = return_properties_media_files_size_array["media_files"];
}
if(return_properties_media_files_size_array != null) {
return_properties_media_files_size_array = return_properties_media_files_size_array.length;
}

// Printing value of return_properties_media_files_size_array variable
console.log("Printing value of return_properties_media_files_size_array");
console.log(return_properties_media_files_size_array);


if((return_properties_revisions_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_size_array)) && (return_properties_media_files_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_media_files_size_array))) {
pm.expect(return_properties_revisions_size_array).to.eql(return_properties_media_files_size_array);
}
})
// size(return.properties_revisions[]) == size(return.properties.media_files[])
pm.test("size(return.properties_revisions[]) == size(return.properties.media_files[])", () => {
// Getting value of variable: return_properties_revisions_size_array
return_properties_revisions_size_array = response["properties_revisions"];
if(return_properties_revisions_size_array != null) {
return_properties_revisions_size_array = return_properties_revisions_size_array.length;
}

// Printing value of return_properties_revisions_size_array variable
console.log("Printing value of return_properties_revisions_size_array");
console.log(return_properties_revisions_size_array);


// Getting value of variable: return_properties_media_files_size_array
return_properties_media_files_size_array = response["properties"];
if(return_properties_media_files_size_array != null) {
return_properties_media_files_size_array = return_properties_media_files_size_array["media_files"];
}
if(return_properties_media_files_size_array != null) {
return_properties_media_files_size_array = return_properties_media_files_size_array.length;
}

// Printing value of return_properties_media_files_size_array variable
console.log("Printing value of return_properties_media_files_size_array");
console.log(return_properties_media_files_size_array);


if((return_properties_revisions_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_size_array)) && (return_properties_media_files_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_media_files_size_array))) {
pm.expect(return_properties_revisions_size_array).to.eql(return_properties_media_files_size_array);
}
})
// return.properties.date_published == "2025-06-16T09:00:00.0Z"
pm.test("return.properties.date_published == 2025-06-16T09:00:00.0Z", () => {
// Getting value of variable: return_properties_date_published
return_properties_date_published = response["properties"];
if(return_properties_date_published != null) {
return_properties_date_published = return_properties_date_published["date_published"];
}
// Printing value of return_properties_date_published variable
console.log("Printing value of return_properties_date_published");
console.log(return_properties_date_published);


if((return_properties_date_published != null) && (!valuesToConsiderAsNull.includes(return_properties_date_published))) {
pm.expect(["2025-06-16T09:00:00.0Z"].includes(return_properties_date_published)).to.be.true;
}
})
// LENGTH(return.properties.date_published)==22
pm.test("LENGTH(return.properties.date_published)==22", () => {
// Getting value of variable: return_properties_date_published
return_properties_date_published = response["properties"];
if(return_properties_date_published != null) {
return_properties_date_published = return_properties_date_published["date_published"];
}
// Printing value of return_properties_date_published variable
console.log("Printing value of return_properties_date_published");
console.log(return_properties_date_published);


if((return_properties_date_published != null) && (!valuesToConsiderAsNull.includes(return_properties_date_published))) {
pm.expect(return_properties_date_published).to.have.length(22);
}
})
// return.properties.date_updated == "2025-06-17T09:00:00.0Z"
pm.test("return.properties.date_updated == 2025-06-17T09:00:00.0Z", () => {
// Getting value of variable: return_properties_date_updated
return_properties_date_updated = response["properties"];
if(return_properties_date_updated != null) {
return_properties_date_updated = return_properties_date_updated["date_updated"];
}
// Printing value of return_properties_date_updated variable
console.log("Printing value of return_properties_date_updated");
console.log(return_properties_date_updated);


if((return_properties_date_updated != null) && (!valuesToConsiderAsNull.includes(return_properties_date_updated))) {
pm.expect(["2025-06-17T09:00:00.0Z"].includes(return_properties_date_updated)).to.be.true;
}
})
// LENGTH(return.properties.date_updated)==22
pm.test("LENGTH(return.properties.date_updated)==22", () => {
// Getting value of variable: return_properties_date_updated
return_properties_date_updated = response["properties"];
if(return_properties_date_updated != null) {
return_properties_date_updated = return_properties_date_updated["date_updated"];
}
// Printing value of return_properties_date_updated variable
console.log("Printing value of return_properties_date_updated");
console.log(return_properties_date_updated);


if((return_properties_date_updated != null) && (!valuesToConsiderAsNull.includes(return_properties_date_updated))) {
pm.expect(return_properties_date_updated).to.have.length(22);
}
})
// return.properties.age_min one of { 0, 50, 100 }
pm.test("return.properties.age_min one of { 0, 50, 100 }", () => {
// Getting value of variable: return_properties_age_min
return_properties_age_min = response["properties"];
if(return_properties_age_min != null) {
return_properties_age_min = return_properties_age_min["age_min"];
}
// Printing value of return_properties_age_min variable
console.log("Printing value of return_properties_age_min");
console.log(return_properties_age_min);


if((return_properties_age_min != null) && (!valuesToConsiderAsNull.includes(return_properties_age_min))) {
pm.expect([0, 50, 100].includes(return_properties_age_min)).to.be.true;
}
})
// return.properties.age_max one of { 0, 50, 100 }
pm.test("return.properties.age_max one of { 0, 50, 100 }", () => {
// Getting value of variable: return_properties_age_max
return_properties_age_max = response["properties"];
if(return_properties_age_max != null) {
return_properties_age_max = return_properties_age_max["age_max"];
}
// Printing value of return_properties_age_max variable
console.log("Printing value of return_properties_age_max");
console.log(return_properties_age_max);


if((return_properties_age_max != null) && (!valuesToConsiderAsNull.includes(return_properties_age_max))) {
pm.expect([0, 50, 100].includes(return_properties_age_max)).to.be.true;
}
})
// return.properties.participants_min one of { 0, 50, 100 }
pm.test("return.properties.participants_min one of { 0, 50, 100 }", () => {
// Getting value of variable: return_properties_participants_min
return_properties_participants_min = response["properties"];
if(return_properties_participants_min != null) {
return_properties_participants_min = return_properties_participants_min["participants_min"];
}
// Printing value of return_properties_participants_min variable
console.log("Printing value of return_properties_participants_min");
console.log(return_properties_participants_min);


if((return_properties_participants_min != null) && (!valuesToConsiderAsNull.includes(return_properties_participants_min))) {
pm.expect([0, 50, 100].includes(return_properties_participants_min)).to.be.true;
}
})
// return.properties.participants_max one of { 0, 50, 100 }
pm.test("return.properties.participants_max one of { 0, 50, 100 }", () => {
// Getting value of variable: return_properties_participants_max
return_properties_participants_max = response["properties"];
if(return_properties_participants_max != null) {
return_properties_participants_max = return_properties_participants_max["participants_max"];
}
// Printing value of return_properties_participants_max variable
console.log("Printing value of return_properties_participants_max");
console.log(return_properties_participants_max);


if((return_properties_participants_max != null) && (!valuesToConsiderAsNull.includes(return_properties_participants_max))) {
pm.expect([0, 50, 100].includes(return_properties_participants_max)).to.be.true;
}
})
// return.properties.time_min one of { 2, 4, 6 }
pm.test("return.properties.time_min one of { 2, 4, 6 }", () => {
// Getting value of variable: return_properties_time_min
return_properties_time_min = response["properties"];
if(return_properties_time_min != null) {
return_properties_time_min = return_properties_time_min["time_min"];
}
// Printing value of return_properties_time_min variable
console.log("Printing value of return_properties_time_min");
console.log(return_properties_time_min);


if((return_properties_time_min != null) && (!valuesToConsiderAsNull.includes(return_properties_time_min))) {
pm.expect([2, 4, 6].includes(return_properties_time_min)).to.be.true;
}
})
// return.properties.time_max one of { 2, 4, 6 }
pm.test("return.properties.time_max one of { 2, 4, 6 }", () => {
// Getting value of variable: return_properties_time_max
return_properties_time_max = response["properties"];
if(return_properties_time_max != null) {
return_properties_time_max = return_properties_time_max["time_max"];
}
// Printing value of return_properties_time_max variable
console.log("Printing value of return_properties_time_max");
console.log(return_properties_time_max);


if((return_properties_time_max != null) && (!valuesToConsiderAsNull.includes(return_properties_time_max))) {
pm.expect([2, 4, 6].includes(return_properties_time_max)).to.be.true;
}
})
// return.properties.source one of { "https://example.com/example", "https://example.com/home.index" }
pm.test("return.properties.source one of { https://example.com/example, https://example.com/home.index }", () => {
// Getting value of variable: return_properties_source
return_properties_source = response["properties"];
if(return_properties_source != null) {
return_properties_source = return_properties_source["source"];
}
// Printing value of return_properties_source variable
console.log("Printing value of return_properties_source");
console.log(return_properties_source);


if((return_properties_source != null) && (!valuesToConsiderAsNull.includes(return_properties_source))) {
pm.expect(["https://example.com/example", "https://example.com/home.index"].includes(return_properties_source)).to.be.true;
}
})
// return.properties.source is Url
pm.test("return.properties.source is Url", () => {
// Getting value of variable: return_properties_source
return_properties_source = response["properties"];
if(return_properties_source != null) {
return_properties_source = return_properties_source["source"];
}
// Printing value of return_properties_source variable
console.log("Printing value of return_properties_source");
console.log(return_properties_source);


if((return_properties_source != null) && (!valuesToConsiderAsNull.includes(return_properties_source))) {
pm.expect(return_properties_source).to.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[\w\u00a1-\uffff0-9]+-?)*[\w\u00a1-\uffff0-9]+)(?:\.(?:[\w\u00a1-\uffff0-9]+-)*[\w\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/);
}
})
// return.properties.author == null
pm.test("return.properties.author == null", () => {
// Getting value of variable: return_properties_author
return_properties_author = response["properties"];
if(return_properties_author != null) {
return_properties_author = return_properties_author["author"];
}
// Printing value of return_properties_author variable
console.log("Printing value of return_properties_author");
console.log(return_properties_author);


if((return_properties_author != null) && (!valuesToConsiderAsNull.includes(return_properties_author))) {
pm.expect(return_properties_author).to.be.null;
}
})
// return.properties.activity == null
pm.test("return.properties.activity == null", () => {
// Getting value of variable: return_properties_activity
return_properties_activity = response["properties"];
if(return_properties_activity != null) {
return_properties_activity = return_properties_activity["activity"];
}
// Printing value of return_properties_activity variable
console.log("Printing value of return_properties_activity");
console.log(return_properties_activity);


if((return_properties_activity != null) && (!valuesToConsiderAsNull.includes(return_properties_activity))) {
pm.expect(return_properties_activity).to.be.null;
}
})
// return.ratings_count == 0
pm.test("return.ratings_count == 0", () => {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if((return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count))) {
pm.expect([0].includes(return_ratings_count)).to.be.true;
}
})
// return.ratings_average == -1.0
pm.test("return.ratings_average == -1.0", () => {
// Getting value of variable: return_ratings_average
return_ratings_average = response["ratings_average"];
// Printing value of return_ratings_average variable
console.log("Printing value of return_ratings_average");
console.log(return_ratings_average);


if((return_ratings_average != null) && (!valuesToConsiderAsNull.includes(return_ratings_average))) {
pm.expect([-1.0, 0.0, 0.0].includes(return_ratings_average)).to.be.true;
}
})
// return.related == null
pm.test("return.related == null", () => {
// Getting value of variable: return_related
return_related = response["related"];
// Printing value of return_related variable
console.log("Printing value of return_related");
console.log(return_related);


if((return_related != null) && (!valuesToConsiderAsNull.includes(return_related))) {
pm.expect(return_related).to.be.null;
}
})
// size(return.properties_revisions[]) == 1
pm.test("size(return.properties_revisions[]) == 1", () => {
// Getting value of variable: return_properties_revisions_size_array
return_properties_revisions_size_array = response["properties_revisions"];
if(return_properties_revisions_size_array != null) {
return_properties_revisions_size_array = return_properties_revisions_size_array.length;
}

// Printing value of return_properties_revisions_size_array variable
console.log("Printing value of return_properties_revisions_size_array");
console.log(return_properties_revisions_size_array);


if((return_properties_revisions_size_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_size_array))) {
pm.expect([1].includes(return_properties_revisions_size_array)).to.be.true;
}
})
// return.properties_revisions[] elements == return.properties_revisions[return.ratings_count]
pm.test("return.properties_revisions[] elements == return.properties_revisions[return.ratings_count]", () => {
// Getting value of variable: return_properties_revisions_array
return_properties_revisions_array = response["properties_revisions"];
// Printing value of return_properties_revisions_array variable
console.log("Printing value of return_properties_revisions_array");
console.log(return_properties_revisions_array);


// Getting value of variable: return_properties_revisions_return_ratings_count
return_properties_revisions_return_ratings_count = response["properties_revisions"];
if(return_properties_revisions_return_ratings_count != null) {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if(return_ratings_count != null) {
return_properties_revisions_return_ratings_count = return_properties_revisions_return_ratings_count[return_ratings_count];
}
}
// Printing value of return_properties_revisions_return_ratings_count variable
console.log("Printing value of return_properties_revisions_return_ratings_count");
console.log(return_properties_revisions_return_ratings_count);


if((return_properties_revisions_array != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_array)) && (return_properties_revisions_return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_properties_revisions_return_ratings_count))) {
pm.expect(return_properties_revisions_array.every(element => element == return_properties_revisions_return_ratings_count)).to.be.true;
}
})
// return.properties.age_min >= return.ratings_count
pm.test("return.properties.age_min >= return.ratings_count", () => {
// Getting value of variable: return_properties_age_min
return_properties_age_min = response["properties"];
if(return_properties_age_min != null) {
return_properties_age_min = return_properties_age_min["age_min"];
}
// Printing value of return_properties_age_min variable
console.log("Printing value of return_properties_age_min");
console.log(return_properties_age_min);


// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if((return_properties_age_min != null) && (!valuesToConsiderAsNull.includes(return_properties_age_min)) && (return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count))) {
pm.expect(return_properties_age_min).to.be.at.least(return_ratings_count);
}
})
// return.properties.age_max >= return.ratings_count
pm.test("return.properties.age_max >= return.ratings_count", () => {
// Getting value of variable: return_properties_age_max
return_properties_age_max = response["properties"];
if(return_properties_age_max != null) {
return_properties_age_max = return_properties_age_max["age_max"];
}
// Printing value of return_properties_age_max variable
console.log("Printing value of return_properties_age_max");
console.log(return_properties_age_max);


// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if((return_properties_age_max != null) && (!valuesToConsiderAsNull.includes(return_properties_age_max)) && (return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count))) {
pm.expect(return_properties_age_max).to.be.at.least(return_ratings_count);
}
})
// return.properties.participants_min >= return.ratings_count
pm.test("return.properties.participants_min >= return.ratings_count", () => {
// Getting value of variable: return_properties_participants_min
return_properties_participants_min = response["properties"];
if(return_properties_participants_min != null) {
return_properties_participants_min = return_properties_participants_min["participants_min"];
}
// Printing value of return_properties_participants_min variable
console.log("Printing value of return_properties_participants_min");
console.log(return_properties_participants_min);


// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if((return_properties_participants_min != null) && (!valuesToConsiderAsNull.includes(return_properties_participants_min)) && (return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count))) {
pm.expect(return_properties_participants_min).to.be.at.least(return_ratings_count);
}
})
// return.properties.participants_max >= return.ratings_count
pm.test("return.properties.participants_max >= return.ratings_count", () => {
// Getting value of variable: return_properties_participants_max
return_properties_participants_max = response["properties"];
if(return_properties_participants_max != null) {
return_properties_participants_max = return_properties_participants_max["participants_max"];
}
// Printing value of return_properties_participants_max variable
console.log("Printing value of return_properties_participants_max");
console.log(return_properties_participants_max);


// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if((return_properties_participants_max != null) && (!valuesToConsiderAsNull.includes(return_properties_participants_max)) && (return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_ratings_count))) {
pm.expect(return_properties_participants_max).to.be.at.least(return_ratings_count);
}
})
// return.properties.tags[] elements == return.properties.tags[return.ratings_count]
pm.test("return.properties.tags[] elements == return.properties.tags[return.ratings_count]", () => {
// Getting value of variable: return_properties_tags_array
return_properties_tags_array = response["properties"];
if(return_properties_tags_array != null) {
return_properties_tags_array = return_properties_tags_array["tags"];
}
// Printing value of return_properties_tags_array variable
console.log("Printing value of return_properties_tags_array");
console.log(return_properties_tags_array);


// Getting value of variable: return_properties_tags_return_ratings_count
return_properties_tags_return_ratings_count = response["properties"];
if(return_properties_tags_return_ratings_count != null) {
return_properties_tags_return_ratings_count = return_properties_tags_return_ratings_count["tags"];
}
if(return_properties_tags_return_ratings_count != null) {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if(return_ratings_count != null) {
return_properties_tags_return_ratings_count = return_properties_tags_return_ratings_count[return_ratings_count];
}
}
// Printing value of return_properties_tags_return_ratings_count variable
console.log("Printing value of return_properties_tags_return_ratings_count");
console.log(return_properties_tags_return_ratings_count);


if((return_properties_tags_array != null) && (!valuesToConsiderAsNull.includes(return_properties_tags_array)) && (return_properties_tags_return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_properties_tags_return_ratings_count))) {
pm.expect(return_properties_tags_array.every(element => element == return_properties_tags_return_ratings_count)).to.be.true;
}
})
// return.properties.media_files[] elements == return.properties.media_files[return.ratings_count]
pm.test("return.properties.media_files[] elements == return.properties.media_files[return.ratings_count]", () => {
// Getting value of variable: return_properties_media_files_array
return_properties_media_files_array = response["properties"];
if(return_properties_media_files_array != null) {
return_properties_media_files_array = return_properties_media_files_array["media_files"];
}
// Printing value of return_properties_media_files_array variable
console.log("Printing value of return_properties_media_files_array");
console.log(return_properties_media_files_array);


// Getting value of variable: return_properties_media_files_return_ratings_count
return_properties_media_files_return_ratings_count = response["properties"];
if(return_properties_media_files_return_ratings_count != null) {
return_properties_media_files_return_ratings_count = return_properties_media_files_return_ratings_count["media_files"];
}
if(return_properties_media_files_return_ratings_count != null) {
// Getting value of variable: return_ratings_count
return_ratings_count = response["ratings_count"];
// Printing value of return_ratings_count variable
console.log("Printing value of return_ratings_count");
console.log(return_ratings_count);


if(return_ratings_count != null) {
return_properties_media_files_return_ratings_count = return_properties_media_files_return_ratings_count[return_ratings_count];
}
}
// Printing value of return_properties_media_files_return_ratings_count variable
console.log("Printing value of return_properties_media_files_return_ratings_count");
console.log(return_properties_media_files_return_ratings_count);


if((return_properties_media_files_array != null) && (!valuesToConsiderAsNull.includes(return_properties_media_files_array)) && (return_properties_media_files_return_ratings_count != null) && (!valuesToConsiderAsNull.includes(return_properties_media_files_return_ratings_count))) {
pm.expect(return_properties_media_files_array.every(element => element == return_properties_media_files_return_ratings_count)).to.be.true;
}
})

// 200&properties_revisions
response_properties_revisions = response["properties_revisions"]
if(response_properties_revisions != null) {
// Printing value of response_properties_revisions variable
console.log("Printing value of response_properties_revisions");
console.log(response_properties_revisions);

for(response_properties_revisions_index in response_properties_revisions) {
response_properties_revisions_element = response_properties_revisions[response_properties_revisions_index]
// Printing value of response_properties_revisions_element variable
console.log("Printing value of response_properties_revisions_element");
console.log(response_properties_revisions_element);

// Invariants of this nesting level:
// input.author.identities == return.author.identities
pm.test("input.author.identities == return.author.identities", () => {
// Getting value of variable: input_author_identities
input_author_identities = input_author;
if(input_author_identities != null) {
input_author_identities = input_author_identities["identities"];
}
// Printing value of input_author_identities variable
console.log("Printing value of input_author_identities");
console.log(input_author_identities);


// Getting value of variable: return_author_identities
return_author_identities = response_properties_revisions_element["author"];
if(return_author_identities != null) {
return_author_identities = return_author_identities["identities"];
}
// Printing value of return_author_identities variable
console.log("Printing value of return_author_identities");
console.log(return_author_identities);


if((input_author_identities != null) && (!valuesToConsiderAsNull.includes(input_author_identities)) && (return_author_identities != null) && (!valuesToConsiderAsNull.includes(return_author_identities))) {
pm.expect(input_author_identities).to.eql(return_author_identities);
}
})
// size(return.tags[]) == size(return.media_files[])
pm.test("size(return.tags[]) == size(return.media_files[])", () => {
// Getting value of variable: return_tags_size_array
return_tags_size_array = response_properties_revisions_element["tags"];
if(return_tags_size_array != null) {
return_tags_size_array = return_tags_size_array.length;
}

// Printing value of return_tags_size_array variable
console.log("Printing value of return_tags_size_array");
console.log(return_tags_size_array);


// Getting value of variable: return_media_files_size_array
return_media_files_size_array = response_properties_revisions_element["media_files"];
if(return_media_files_size_array != null) {
return_media_files_size_array = return_media_files_size_array.length;
}

// Printing value of return_media_files_size_array variable
console.log("Printing value of return_media_files_size_array");
console.log(return_media_files_size_array);


if((return_tags_size_array != null) && (!valuesToConsiderAsNull.includes(return_tags_size_array)) && (return_media_files_size_array != null) && (!valuesToConsiderAsNull.includes(return_media_files_size_array))) {
pm.expect(return_tags_size_array).to.eql(return_media_files_size_array);
}
})
// size(return.tags[]) == size(return.media_files[])
pm.test("size(return.tags[]) == size(return.media_files[])", () => {
// Getting value of variable: return_tags_size_array
return_tags_size_array = response_properties_revisions_element["tags"];
if(return_tags_size_array != null) {
return_tags_size_array = return_tags_size_array.length;
}

// Printing value of return_tags_size_array variable
console.log("Printing value of return_tags_size_array");
console.log(return_tags_size_array);


// Getting value of variable: return_media_files_size_array
return_media_files_size_array = response_properties_revisions_element["media_files"];
if(return_media_files_size_array != null) {
return_media_files_size_array = return_media_files_size_array.length;
}

// Printing value of return_media_files_size_array variable
console.log("Printing value of return_media_files_size_array");
console.log(return_media_files_size_array);


if((return_tags_size_array != null) && (!valuesToConsiderAsNull.includes(return_tags_size_array)) && (return_media_files_size_array != null) && (!valuesToConsiderAsNull.includes(return_media_files_size_array))) {
pm.expect(return_tags_size_array).to.eql(return_media_files_size_array);
}
})
// return.date_published == "2025-06-16T09:00:00.0Z"
pm.test("return.date_published == 2025-06-16T09:00:00.0Z", () => {
// Getting value of variable: return_date_published
return_date_published = response_properties_revisions_element["date_published"];
// Printing value of return_date_published variable
console.log("Printing value of return_date_published");
console.log(return_date_published);


if((return_date_published != null) && (!valuesToConsiderAsNull.includes(return_date_published))) {
pm.expect(["2025-06-16T09:00:00.0Z"].includes(return_date_published)).to.be.true;
}
})
// LENGTH(return.date_published)==22
pm.test("LENGTH(return.date_published)==22", () => {
// Getting value of variable: return_date_published
return_date_published = response_properties_revisions_element["date_published"];
// Printing value of return_date_published variable
console.log("Printing value of return_date_published");
console.log(return_date_published);


if((return_date_published != null) && (!valuesToConsiderAsNull.includes(return_date_published))) {
pm.expect(return_date_published).to.have.length(22);
}
})
// return.date_updated == "2025-06-17T09:00:00.0Z"
pm.test("return.date_updated == 2025-06-17T09:00:00.0Z", () => {
// Getting value of variable: return_date_updated
return_date_updated = response_properties_revisions_element["date_updated"];
// Printing value of return_date_updated variable
console.log("Printing value of return_date_updated");
console.log(return_date_updated);


if((return_date_updated != null) && (!valuesToConsiderAsNull.includes(return_date_updated))) {
pm.expect(["2025-06-17T09:00:00.0Z"].includes(return_date_updated)).to.be.true;
}
})
// LENGTH(return.date_updated)==22
pm.test("LENGTH(return.date_updated)==22", () => {
// Getting value of variable: return_date_updated
return_date_updated = response_properties_revisions_element["date_updated"];
// Printing value of return_date_updated variable
console.log("Printing value of return_date_updated");
console.log(return_date_updated);


if((return_date_updated != null) && (!valuesToConsiderAsNull.includes(return_date_updated))) {
pm.expect(return_date_updated).to.have.length(22);
}
})
// return.age_min one of { 0, 50, 100 }
pm.test("return.age_min one of { 0, 50, 100 }", () => {
// Getting value of variable: return_age_min
return_age_min = response_properties_revisions_element["age_min"];
// Printing value of return_age_min variable
console.log("Printing value of return_age_min");
console.log(return_age_min);


if((return_age_min != null) && (!valuesToConsiderAsNull.includes(return_age_min))) {
pm.expect([0, 50, 100].includes(return_age_min)).to.be.true;
}
})
// return.age_max one of { 0, 50, 100 }
pm.test("return.age_max one of { 0, 50, 100 }", () => {
// Getting value of variable: return_age_max
return_age_max = response_properties_revisions_element["age_max"];
// Printing value of return_age_max variable
console.log("Printing value of return_age_max");
console.log(return_age_max);


if((return_age_max != null) && (!valuesToConsiderAsNull.includes(return_age_max))) {
pm.expect([0, 50, 100].includes(return_age_max)).to.be.true;
}
})
// return.participants_min one of { 0, 50, 100 }
pm.test("return.participants_min one of { 0, 50, 100 }", () => {
// Getting value of variable: return_participants_min
return_participants_min = response_properties_revisions_element["participants_min"];
// Printing value of return_participants_min variable
console.log("Printing value of return_participants_min");
console.log(return_participants_min);


if((return_participants_min != null) && (!valuesToConsiderAsNull.includes(return_participants_min))) {
pm.expect([0, 50, 100].includes(return_participants_min)).to.be.true;
}
})
// return.participants_max one of { 0, 50, 100 }
pm.test("return.participants_max one of { 0, 50, 100 }", () => {
// Getting value of variable: return_participants_max
return_participants_max = response_properties_revisions_element["participants_max"];
// Printing value of return_participants_max variable
console.log("Printing value of return_participants_max");
console.log(return_participants_max);


if((return_participants_max != null) && (!valuesToConsiderAsNull.includes(return_participants_max))) {
pm.expect([0, 50, 100].includes(return_participants_max)).to.be.true;
}
})
// return.time_min one of { 2, 4, 6 }
pm.test("return.time_min one of { 2, 4, 6 }", () => {
// Getting value of variable: return_time_min
return_time_min = response_properties_revisions_element["time_min"];
// Printing value of return_time_min variable
console.log("Printing value of return_time_min");
console.log(return_time_min);


if((return_time_min != null) && (!valuesToConsiderAsNull.includes(return_time_min))) {
pm.expect([2, 4, 6].includes(return_time_min)).to.be.true;
}
})
// return.time_max one of { 2, 4, 6 }
pm.test("return.time_max one of { 2, 4, 6 }", () => {
// Getting value of variable: return_time_max
return_time_max = response_properties_revisions_element["time_max"];
// Printing value of return_time_max variable
console.log("Printing value of return_time_max");
console.log(return_time_max);


if((return_time_max != null) && (!valuesToConsiderAsNull.includes(return_time_max))) {
pm.expect([2, 4, 6].includes(return_time_max)).to.be.true;
}
})
// return.source one of { "https://example.com/example", "https://example.com/home.index" }
pm.test("return.source one of { https://example.com/example, https://example.com/home.index }", () => {
// Getting value of variable: return_source
return_source = response_properties_revisions_element["source"];
// Printing value of return_source variable
console.log("Printing value of return_source");
console.log(return_source);


if((return_source != null) && (!valuesToConsiderAsNull.includes(return_source))) {
pm.expect(["https://example.com/example", "https://example.com/home.index"].includes(return_source)).to.be.true;
}
})
// return.source is Url
pm.test("return.source is Url", () => {
// Getting value of variable: return_source
return_source = response_properties_revisions_element["source"];
// Printing value of return_source variable
console.log("Printing value of return_source");
console.log(return_source);


if((return_source != null) && (!valuesToConsiderAsNull.includes(return_source))) {
pm.expect(return_source).to.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[\w\u00a1-\uffff0-9]+-?)*[\w\u00a1-\uffff0-9]+)(?:\.(?:[\w\u00a1-\uffff0-9]+-)*[\w\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/);
}
})
// return.author == null
pm.test("return.author == null", () => {
// Getting value of variable: return_author
return_author = response_properties_revisions_element["author"];
// Printing value of return_author variable
console.log("Printing value of return_author");
console.log(return_author);


if((return_author != null) && (!valuesToConsiderAsNull.includes(return_author))) {
pm.expect(return_author).to.be.null;
}
})
// return.activity == null
pm.test("return.activity == null", () => {
// Getting value of variable: return_activity
return_activity = response_properties_revisions_element["activity"];
// Printing value of return_activity variable
console.log("Printing value of return_activity");
console.log(return_activity);


if((return_activity != null) && (!valuesToConsiderAsNull.includes(return_activity))) {
pm.expect(return_activity).to.be.null;
}
})
// size(return.tags[]) == 1
pm.test("size(return.tags[]) == 1", () => {
// Getting value of variable: return_tags_size_array
return_tags_size_array = response_properties_revisions_element["tags"];
if(return_tags_size_array != null) {
return_tags_size_array = return_tags_size_array.length;
}

// Printing value of return_tags_size_array variable
console.log("Printing value of return_tags_size_array");
console.log(return_tags_size_array);


if((return_tags_size_array != null) && (!valuesToConsiderAsNull.includes(return_tags_size_array))) {
pm.expect([1].includes(return_tags_size_array)).to.be.true;
}
})

// 200&properties_revisions&media_files
response_properties_revisions_element_media_files = response_properties_revisions_element["media_files"]
if(response_properties_revisions_element_media_files != null) {
// Printing value of response_properties_revisions_element_media_files variable
console.log("Printing value of response_properties_revisions_element_media_files");
console.log(response_properties_revisions_element_media_files);

for(response_properties_revisions_element_media_files_index in response_properties_revisions_element_media_files) {
response_properties_revisions_element_media_files_element = response_properties_revisions_element_media_files[response_properties_revisions_element_media_files_index]
// Printing value of response_properties_revisions_element_media_files_element variable
console.log("Printing value of response_properties_revisions_element_media_files_element");
console.log(response_properties_revisions_element_media_files_element);

// Invariants of this nesting level:
// return.id == 1
pm.test("return.id == 1", () => {
// Getting value of variable: return_id
return_id = response_properties_revisions_element_media_files_element["id"];
// Printing value of return_id variable
console.log("Printing value of return_id");
console.log(return_id);


if((return_id != null) && (!valuesToConsiderAsNull.includes(return_id))) {
pm.expect([1].includes(return_id)).to.be.true;
}
})
// return.mime_type == "image/jpeg"
pm.test("return.mime_type == image/jpeg", () => {
// Getting value of variable: return_mime_type
return_mime_type = response_properties_revisions_element_media_files_element["mime_type"];
// Printing value of return_mime_type variable
console.log("Printing value of return_mime_type");
console.log(return_mime_type);


if((return_mime_type != null) && (!valuesToConsiderAsNull.includes(return_mime_type))) {
pm.expect(["image/jpeg"].includes(return_mime_type)).to.be.true;
}
})
// LENGTH(return.mime_type)==10
pm.test("LENGTH(return.mime_type)==10", () => {
// Getting value of variable: return_mime_type
return_mime_type = response_properties_revisions_element_media_files_element["mime_type"];
// Printing value of return_mime_type variable
console.log("Printing value of return_mime_type");
console.log(return_mime_type);


if((return_mime_type != null) && (!valuesToConsiderAsNull.includes(return_mime_type))) {
pm.expect(return_mime_type).to.have.length(10);
}
})
// return.uri == "https://example.com/forest.jpg"
pm.test("return.uri == https://example.com/forest.jpg", () => {
// Getting value of variable: return_uri
return_uri = response_properties_revisions_element_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(["https://example.com/forest.jpg"].includes(return_uri)).to.be.true;
}
})
// LENGTH(return.uri)==30
pm.test("LENGTH(return.uri)==30", () => {
// Getting value of variable: return_uri
return_uri = response_properties_revisions_element_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(return_uri).to.have.length(30);
}
})
// return.uri is Url
pm.test("return.uri is Url", () => {
// Getting value of variable: return_uri
return_uri = response_properties_revisions_element_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(return_uri).to.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[\w\u00a1-\uffff0-9]+-?)*[\w\u00a1-\uffff0-9]+)(?:\.(?:[\w\u00a1-\uffff0-9]+-)*[\w\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/);
}
})
// return.name == "forest hunt"
pm.test("return.name == forest hunt", () => {
// Getting value of variable: return_name
return_name = response_properties_revisions_element_media_files_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(["forest hunt"].includes(return_name)).to.be.true;
}
})
// LENGTH(return.name)==11
pm.test("LENGTH(return.name)==11", () => {
// Getting value of variable: return_name
return_name = response_properties_revisions_element_media_files_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(return_name).to.have.length(11);
}
})

} // Closing for response_properties_revisions_element
} // Closing if response_properties_revisions_element

// 200&properties_revisions&tags
response_properties_revisions_element_tags = response_properties_revisions_element["tags"]
if(response_properties_revisions_element_tags != null) {
// Printing value of response_properties_revisions_element_tags variable
console.log("Printing value of response_properties_revisions_element_tags");
console.log(response_properties_revisions_element_tags);

for(response_properties_revisions_element_tags_index in response_properties_revisions_element_tags) {
response_properties_revisions_element_tags_element = response_properties_revisions_element_tags[response_properties_revisions_element_tags_index]
// Printing value of response_properties_revisions_element_tags_element variable
console.log("Printing value of response_properties_revisions_element_tags_element");
console.log(response_properties_revisions_element_tags_element);

// Invariants of this nesting level:
// return.id one of { 4, 6 }
pm.test("return.id one of { 4, 6 }", () => {
// Getting value of variable: return_id
return_id = response_properties_revisions_element_tags_element["id"];
// Printing value of return_id variable
console.log("Printing value of return_id");
console.log(return_id);


if((return_id != null) && (!valuesToConsiderAsNull.includes(return_id))) {
pm.expect([4, 6, 0].includes(return_id)).to.be.true;
}
})
// return.group one of { "1feelings", "feelings" }
pm.test("return.group one of { 1feelings, feelings }", () => {
// Getting value of variable: return_group
return_group = response_properties_revisions_element_tags_element["group"];
// Printing value of return_group variable
console.log("Printing value of return_group");
console.log(return_group);


if((return_group != null) && (!valuesToConsiderAsNull.includes(return_group))) {
pm.expect(["1feelings", "feelings"].includes(return_group)).to.be.true;
}
})
// return.name one of { "1Happy", "Think" }
pm.test("return.name one of { 1Happy, Think }", () => {
// Getting value of variable: return_name
return_name = response_properties_revisions_element_tags_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(["1Happy", "Think"].includes(return_name)).to.be.true;
}
})
// return.media_file == null
pm.test("return.media_file == null", () => {
// Getting value of variable: return_media_file
return_media_file = response_properties_revisions_element_tags_element["media_file"];
// Printing value of return_media_file variable
console.log("Printing value of return_media_file");
console.log(return_media_file);


if((return_media_file != null) && (!valuesToConsiderAsNull.includes(return_media_file))) {
pm.expect(return_media_file).to.be.null;
}
})
// return.activities_count == 0
pm.test("return.activities_count == 0", () => {
// Getting value of variable: return_activities_count
return_activities_count = response_properties_revisions_element_tags_element["activities_count"];
// Printing value of return_activities_count variable
console.log("Printing value of return_activities_count");
console.log(return_activities_count);


if((return_activities_count != null) && (!valuesToConsiderAsNull.includes(return_activities_count))) {
pm.expect([0].includes(return_activities_count)).to.be.true;
}
})

} // Closing for response_properties_revisions_element
} // Closing if response_properties_revisions_element

} // Closing for response
} // Closing if response

// 200&properties
response_properties = response["properties"]
if(response_properties != null) {
// Printing value of response_properties variable
console.log("Printing value of response_properties");
console.log(response_properties);

// This nesting level has no invariants

// 200&properties&tags
response_properties_tags = response_properties["tags"]
if(response_properties_tags != null) {
// Printing value of response_properties_tags variable
console.log("Printing value of response_properties_tags");
console.log(response_properties_tags);

for(response_properties_tags_index in response_properties_tags) {
response_properties_tags_element = response_properties_tags[response_properties_tags_index]
// Printing value of response_properties_tags_element variable
console.log("Printing value of response_properties_tags_element");
console.log(response_properties_tags_element);

// Invariants of this nesting level:
// return.id one of { 4, 6 }
pm.test("return.id one of { 4, 6 }", () => {
// Getting value of variable: return_id
return_id = response_properties_tags_element["id"];
// Printing value of return_id variable
console.log("Printing value of return_id");
console.log(return_id);


if((return_id != null) && (!valuesToConsiderAsNull.includes(return_id))) {
pm.expect([4, 6, 0].includes(return_id)).to.be.true;
}
})
// return.group one of { "1feelings", "feelings" }
pm.test("return.group one of { 1feelings, feelings }", () => {
// Getting value of variable: return_group
return_group = response_properties_tags_element["group"];
// Printing value of return_group variable
console.log("Printing value of return_group");
console.log(return_group);


if((return_group != null) && (!valuesToConsiderAsNull.includes(return_group))) {
pm.expect(["1feelings", "feelings"].includes(return_group)).to.be.true;
}
})
// return.name one of { "1Happy", "Think" }
pm.test("return.name one of { 1Happy, Think }", () => {
// Getting value of variable: return_name
return_name = response_properties_tags_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(["1Happy", "Think"].includes(return_name)).to.be.true;
}
})
// return.media_file == null
pm.test("return.media_file == null", () => {
// Getting value of variable: return_media_file
return_media_file = response_properties_tags_element["media_file"];
// Printing value of return_media_file variable
console.log("Printing value of return_media_file");
console.log(return_media_file);


if((return_media_file != null) && (!valuesToConsiderAsNull.includes(return_media_file))) {
pm.expect(return_media_file).to.be.null;
}
})
// return.activities_count == 0
pm.test("return.activities_count == 0", () => {
// Getting value of variable: return_activities_count
return_activities_count = response_properties_tags_element["activities_count"];
// Printing value of return_activities_count variable
console.log("Printing value of return_activities_count");
console.log(return_activities_count);


if((return_activities_count != null) && (!valuesToConsiderAsNull.includes(return_activities_count))) {
pm.expect([0].includes(return_activities_count)).to.be.true;
}
})

} // Closing for response_properties
} // Closing if response_properties

// 200&properties&media_files
response_properties_media_files = response_properties["media_files"]
if(response_properties_media_files != null) {
// Printing value of response_properties_media_files variable
console.log("Printing value of response_properties_media_files");
console.log(response_properties_media_files);

for(response_properties_media_files_index in response_properties_media_files) {
response_properties_media_files_element = response_properties_media_files[response_properties_media_files_index]
// Printing value of response_properties_media_files_element variable
console.log("Printing value of response_properties_media_files_element");
console.log(response_properties_media_files_element);

// Invariants of this nesting level:
// return.id == 1
pm.test("return.id == 1", () => {
// Getting value of variable: return_id
return_id = response_properties_media_files_element["id"];
// Printing value of return_id variable
console.log("Printing value of return_id");
console.log(return_id);


if((return_id != null) && (!valuesToConsiderAsNull.includes(return_id))) {
pm.expect([1].includes(return_id)).to.be.true;
}
})
// return.mime_type == "image/jpeg"
pm.test("return.mime_type == image/jpeg", () => {
// Getting value of variable: return_mime_type
return_mime_type = response_properties_media_files_element["mime_type"];
// Printing value of return_mime_type variable
console.log("Printing value of return_mime_type");
console.log(return_mime_type);


if((return_mime_type != null) && (!valuesToConsiderAsNull.includes(return_mime_type))) {
pm.expect(["image/jpeg"].includes(return_mime_type)).to.be.true;
}
})
// LENGTH(return.mime_type)==10
pm.test("LENGTH(return.mime_type)==10", () => {
// Getting value of variable: return_mime_type
return_mime_type = response_properties_media_files_element["mime_type"];
// Printing value of return_mime_type variable
console.log("Printing value of return_mime_type");
console.log(return_mime_type);


if((return_mime_type != null) && (!valuesToConsiderAsNull.includes(return_mime_type))) {
pm.expect(return_mime_type).to.have.length(10);
}
})
// return.uri == "https://example.com/forest.jpg"
pm.test("return.uri == https://example.com/forest.jpg", () => {
// Getting value of variable: return_uri
return_uri = response_properties_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(["https://example.com/forest.jpg"].includes(return_uri)).to.be.true;
}
})
// LENGTH(return.uri)==30
pm.test("LENGTH(return.uri)==30", () => {
// Getting value of variable: return_uri
return_uri = response_properties_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(return_uri).to.have.length(30);
}
})
// return.uri is Url
pm.test("return.uri is Url", () => {
// Getting value of variable: return_uri
return_uri = response_properties_media_files_element["uri"];
// Printing value of return_uri variable
console.log("Printing value of return_uri");
console.log(return_uri);


if((return_uri != null) && (!valuesToConsiderAsNull.includes(return_uri))) {
pm.expect(return_uri).to.match(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[\w\u00a1-\uffff0-9]+-?)*[\w\u00a1-\uffff0-9]+)(?:\.(?:[\w\u00a1-\uffff0-9]+-)*[\w\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/);
}
})
// return.name == "forest hunt"
pm.test("return.name == forest hunt", () => {
// Getting value of variable: return_name
return_name = response_properties_media_files_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(["forest hunt"].includes(return_name)).to.be.true;
}
})
// LENGTH(return.name)==11
pm.test("LENGTH(return.name)==11", () => {
// Getting value of variable: return_name
return_name = response_properties_media_files_element["name"];
// Printing value of return_name variable
console.log("Printing value of return_name");
console.log(return_name);


if((return_name != null) && (!valuesToConsiderAsNull.includes(return_name))) {
pm.expect(return_name).to.have.length(11);
}
})

} // Closing for response_properties
} // Closing if response_properties

} // Closing if response
