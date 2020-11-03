const icons = {
  circle:
    'M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0L10,0z M10,18 c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S14.4,18,10,18L10,18z',
  facebook:
    'M22.4141 11.9375C22.4141 6.18457 17.7529 1.52344 12 1.52344C6.24707 1.52344 1.58594 6.18457 1.58594 11.9375C1.58594 17.1445 5.36523 21.4697 10.3623 22.2256V14.9609H7.7168V11.9375H10.3623V9.66992C10.3623 7.06641 11.916 5.59668 14.2676 5.59668C15.4434 5.59668 16.6191 5.80664 16.6191 5.80664V8.36816H15.3174C14.0156 8.36816 13.5957 9.16602 13.5957 10.0059V11.9375H16.4932L16.0312 14.9609H13.5957V22.2256C18.5928 21.4697 22.4141 17.1445 22.4141 11.9375Z',
  instagram:
    'M12 7.1084C9.3125 7.1084 7.1709 9.29199 7.1709 11.9375C7.1709 14.625 9.3125 16.7666 12 16.7666C14.6455 16.7666 16.8291 14.625 16.8291 11.9375C16.8291 9.29199 14.6455 7.1084 12 7.1084ZM12 15.0869C10.2783 15.0869 8.85059 13.7012 8.85059 11.9375C8.85059 10.2158 10.2363 8.83008 12 8.83008C13.7217 8.83008 15.1074 10.2158 15.1074 11.9375C15.1074 13.7012 13.7217 15.0869 12 15.0869ZM18.1309 6.94043C18.1309 6.31055 17.627 5.80664 16.9971 5.80664C16.3672 5.80664 15.8633 6.31055 15.8633 6.94043C15.8633 7.57031 16.3672 8.07422 16.9971 8.07422C17.627 8.07422 18.1309 7.57031 18.1309 6.94043ZM21.3223 8.07422C21.2383 6.5625 20.9023 5.21875 19.8105 4.12695C18.7188 3.03516 17.375 2.69922 15.8633 2.61523C14.3096 2.53125 9.64844 2.53125 8.09473 2.61523C6.58301 2.69922 5.28125 3.03516 4.14746 4.12695C3.05566 5.21875 2.71973 6.5625 2.63574 8.07422C2.55176 9.62793 2.55176 14.2891 2.63574 15.8428C2.71973 17.3545 3.05566 18.6562 4.14746 19.79C5.28125 20.8818 6.58301 21.2178 8.09473 21.3018C9.64844 21.3857 14.3096 21.3857 15.8633 21.3018C17.375 21.2178 18.7188 20.8818 19.8105 19.79C20.9023 18.6562 21.2383 17.3545 21.3223 15.8428C21.4062 14.2891 21.4062 9.62793 21.3223 8.07422ZM19.3066 17.4805C19.0127 18.3203 18.3408 18.9502 17.543 19.2861C16.2832 19.79 13.3438 19.6641 12 19.6641C10.6143 19.6641 7.6748 19.79 6.45703 19.2861C5.61719 18.9502 4.9873 18.3203 4.65137 17.4805C4.14746 16.2627 4.27344 13.3232 4.27344 11.9375C4.27344 10.5938 4.14746 7.6543 4.65137 6.39453C4.9873 5.59668 5.61719 4.9668 6.45703 4.63086C7.6748 4.12695 10.6143 4.25293 12 4.25293C13.3438 4.25293 16.2832 4.12695 17.543 4.63086C18.3408 4.9248 18.9707 5.59668 19.3066 6.39453C19.8105 7.6543 19.6846 10.5938 19.6846 11.9375C19.6846 13.3232 19.8105 16.2627 19.3066 17.4805Z',
  menu:
    'M20.9023 6.39453C21.1543 6.39453 21.4062 6.18457 21.4062 5.89062V4.54688C21.4062 4.29492 21.1543 4.04297 20.9023 4.04297H3.09766C2.80371 4.04297 2.59375 4.29492 2.59375 4.54688V5.89062C2.59375 6.18457 2.80371 6.39453 3.09766 6.39453H20.9023ZM20.9023 13.1133C21.1543 13.1133 21.4062 12.9033 21.4062 12.6094V11.2656C21.4062 11.0137 21.1543 10.7617 20.9023 10.7617H3.09766C2.80371 10.7617 2.59375 11.0137 2.59375 11.2656V12.6094C2.59375 12.9033 2.80371 13.1133 3.09766 13.1133H20.9023ZM20.9023 19.832C21.1543 19.832 21.4062 19.6221 21.4062 19.3281V17.9844C21.4062 17.7324 21.1543 17.4805 20.9023 17.4805H3.09766C2.80371 17.4805 2.59375 17.7324 2.59375 17.9844V19.3281C2.59375 19.6221 2.80371 19.832 3.09766 19.832H20.9023Z',
  youtube:
    'M22.96 6.43652C22.708 5.42871 21.9102 4.63086 20.9443 4.37891C19.1387 3.875 12 3.875 12 3.875C12 3.875 4.81934 3.875 3.01367 4.37891C2.04785 4.63086 1.25 5.42871 0.998047 6.43652C0.494141 8.2002 0.494141 11.9795 0.494141 11.9795C0.494141 11.9795 0.494141 15.7168 0.998047 17.5225C1.25 18.5303 2.04785 19.2861 3.01367 19.5381C4.81934 20 12 20 12 20C12 20 19.1387 20 20.9443 19.5381C21.9102 19.2861 22.708 18.5303 22.96 17.5225C23.4639 15.7168 23.4639 11.9795 23.4639 11.9795C23.4639 11.9795 23.4639 8.2002 22.96 6.43652ZM9.64844 15.3809V8.57812L15.6113 11.9795L9.64844 15.3809Z',
};

export default icons;
