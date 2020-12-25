function getSize(matrix) {
    let m, n;
    m = matrix.length;
    n = matrix[0].length;
    return { m, n }
}

function createMatrixArray(m, n, defaultNumber=null) {
    let matrix = [];
    for (let i = 0; i < m; i ++) {
        let subArr = [];
        for (let j = 0; j < n; j++) {
            subArr.push(defaultNumber);
        }
        matrix.push(subArr);
    }

    return matrix;
}

function isZeroRow( row ) {
	for(let i=0; i < row.length; i++ )
		if(row[i]!=0)
			return false;	
	return true;
}

