<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Iot</title>


        {{-- Libraries  --}}
        <script src="{{ asset('lib-ajax/jquery-3.5.1.min.js') }}"></script>
        <script src="{{ asset('css/bootstrap/js2/bootstrap.min.js') }}"></script>
        <link rel="stylesheet" href="{{ asset('css/bootstrap/fontawesome/css/all.css') }}">
        <link rel="stylesheet" href="{{ asset('css/bootstrap/css2/bootstrap.min.css') }}">
        {{-- css files  --}}
        <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">
        <link href="{{ asset('css/main.css') }}" rel="stylesheet">
        <link href="{{ asset('css/modal.css') }}" rel="stylesheet">
        <link href="{{ asset('css/myarea.css') }}" rel="stylesheet">
        <link href="{{ asset('css/login.css') }}" rel="stylesheet">

        <link rel="shortcut icon" sizes="114x114" href="{{ asset('pictures/internet-of-things.png') }}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    </head>
    <body class="antialiased">
        <div id="root">

        </div>
    </body>
    <script type="text/javascript" src="../js/app.js"></script>
</html>
