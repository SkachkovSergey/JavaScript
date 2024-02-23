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

honden.unshift('Shih Tzu', 'Cavalier King Charles Spaniel',
    'Miniature Schnauzer','Australian Shepherd',
    'Pembroke Welsh Corgi', 'Great Dane');

for(let i = 0; i < honden.length; i++){
    console.log(honden[i]);
}
