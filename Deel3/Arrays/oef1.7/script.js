const honden = ['Labrador Retriever',
    'German Shepherd',
    'Golden Retriever',
    'Rottweiler',
    'Beagle',
    'French Bulldog',
    'Yorkshire Terrier',
    'Boxer',
    'Siberian Husky',
    'Doberman'];

honden.splice(2, 1, 'Airedale terrier');//Deleting 'Golden Retriever' adding 'Airedale terrier'
honden.splice(7, 2);//Deleting two position starting from the seventh index 'Boxer' and 'Siberian Husky'

console.log(honden.join('\n'));