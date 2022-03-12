// import './index.scss';

function importAll(r) {
  r.keys().forEach(r);
}

// importAll(require.context('../src/blocks/', true, /\.js$|\.scss$/));
// importAll(require.context('../src/pages/', true, /\.js$|\.scss$/));

importAll(require.context('../src/', true, /\.js$|\.scss$/));
