import pegi3 from '../shared/pegi3.png';
import pegi7 from '../shared/pegi7.png';
import pegi12 from '../shared/pegi12.png';
import pegi16 from '../shared/pegi16.png';
import pegi18 from '../shared/pegi18.png';

export const getPegi = (pegi) => {
    if (pegi === 3) {
        return pegi3;
    }
    if (pegi === 7) {
        return pegi7;
    }
    if (pegi === 12) {
        return pegi12;
    }
    if (pegi === 16) {
        return pegi16;
    }
    else {
        return pegi18;
    }
}