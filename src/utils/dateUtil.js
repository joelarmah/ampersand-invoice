import moment from "moment";

export const formatDate = (date, format = "DD MMM yyyy") => {
    return  moment(new Date(date)).format(format);
}