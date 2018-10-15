const airtableQuery = url => fetch(url).then(res => res.json());

export default airtableQuery;
