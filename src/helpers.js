import moment from 'moment';

export const dateToShow = date => {
    return moment(date).format('DD/MM/YYYY');
};