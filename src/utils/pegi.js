import pegi3 from '../shared/pegi3.png';
import pegi7 from '../shared/pegi7.png';
import pegi12 from '../shared/pegi12.png';
import pegi16 from '../shared/pegi16.png';
import pegi18 from '../shared/pegi18.png';

export const getPegi = (pegi) => {
    if (pegi === 3) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi3.png';
    }
    if (pegi === 7) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi7.png';
    }
    if (pegi === 12) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi12.png';
    }
    if (pegi === 16) {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi16.png';
    }
    else {
        return 'https://pegiimages.s3.eu-west-2.amazonaws.com/pegi18.png';
    }
}