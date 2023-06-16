
 const nameBanner = () => {
    var name  = ;
    const width = 50;
    const height = 5 ;
    const borderChar = '#';
    const namePadding = ' '.repeat(Math.floor((width - name.length) / 2));
    
    const borderLine = borderChar.repeat(width);
    const nameLine = `${borderChar}${namePadding}${name}${namePadding}${borderChar}`;
    
    console.log(borderLine);
    for (let i = 0; i < height - 2; i++) {
      console.log(`#${' '.repeat(width - 2)}#`);
    }
    console.log(nameLine);
    console.log(borderLine);
  };
  
  nameBanner();