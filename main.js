require.config({
    baseUrl:'../',
    paths:{
        'jquery': 'lib/jquery/jquery-1.9.1.min',
        'fastClick':'lib/fastclick',
        'artTemplate':'lib/art-template/template-native',
        'swal':'lib/sweetalert2.min'
    }
});
/*require.config({
    locale: 'en_us',

    baseUrl: 'baseUrl',
    paths: {
        // Paths of the libraries being used
        'Iscroll' : 'relative path to the file',
        ......
        ......  Other files
    },
    shim : { // If the library does not support AMD//加载非
        'Iscroll': {
             exports: 'Iscroll'
         },
    }
});*/
require(["fastClick","js/index","js/login","js/new","js/two","js/playlist"],function(fc){
   fc.attach(document.body);
}) 