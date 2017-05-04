let names = ['ac', 'accumsan', 'adipiscing', 'aliquam', 'Aliquam', 'aliquet', 'amet', 'ante', 'at', 'augue', 'commodo', 'consectetur', 'convallis', 'Cras', 'cubilia', 'Curae;', 'cursus', 'dapibus', 'diam', 'dictumst', 'dignissim', 'dolor', 'Donec', 'Duis', 'egestas', 'eget', 'elementum', 'elit', 'et', 'eu', 'euismod', 'facilisis', 'faucibus', 'felis', 'finibus', 'gravida', 'habitasse', 'hac', 'hendrerit', 'id', 'In', 'in', 'ipsum', 'justo', 'lacus', 'lectus', 'libero', 'Lorem', 'luctus', 'magna', 'massa', 'Mauris', 'mauris', 'mi', 'Nam', 'nec', 'neque', 'nunc', 'orci', 'Pellentesque', 'Phasellus', 'platea', 'porttitor', 'posuere', 'Praesent', 'primis', 'quis', 'risus', 'rutrum', 'sagittis', 'scelerisque', 'Sed', 'sed', 'sem', 'sit', 'sodales', 'tempus', 'tincidunt', 'ultrices', 'ultricies', 'urna', 'varius', 'velit', 'venenatis', 'Vestibulum', 'vitae', 'Vivamus', 'vulputate'];
export const dummy = [];
function randomDate(): Date {
  return new Date((1900 + Math.floor(Math.random() * 101)) + '-' + (Math.floor(Math.random() * 12) + 1) + '-01');
}
for (let i = 0; i < 10000; i ++) {
  dummy.push({
    name: names[Math.floor(Math.random() * 88)],
    dob: randomDate(),
    time: randomDate()
  });
}