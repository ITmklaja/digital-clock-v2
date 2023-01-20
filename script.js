window.onload = clock();

        function zero(p){
            for(let i = 7; i < 10; i++){
                document.getElementById('p' + p + '-a' + i).style.backgroundColor = 'white';
            }
        }

        function one(p){
            for(let i = 1; i < 11; i++){
                document.getElementById('p' + p + '-a' + i).style.backgroundColor = 'white';
            }
        }

        function two(p){
            document.getElementById('p' + p + '-a2').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a14').style.backgroundColor = 'white';
        }

        function three(p){
            document.getElementById('p' + p + '-a2').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a4').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
        }

        function four(p){
            for(let i = 4; i < 11; i++){
                if(i != 8){
                    document.getElementById('p' + p + '-a' + i).style.backgroundColor = 'white';
                }
            }
        }

        function five(p){
            document.getElementById('p' + p + '-a4').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a12').style.backgroundColor = 'white';
        }

        function six(p){
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a12').style.backgroundColor = 'white';
        }

        function seven(p){
            for(let i = 1; i < 11; i++){
                if(i != 1 && i != 6){
                    document.getElementById('p' + p + '-a' + i).style.backgroundColor = 'white';
                }
            }
        }

        function eight(p){
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
        }

        function nine(p){
            document.getElementById('p' + p + '-a4').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a7').style.backgroundColor = 'white';
            document.getElementById('p' + p + '-a9').style.backgroundColor = 'white';
        }

        function clock(){
            for(let i = 1; i < 7; i++){
                for(let j = 1; j < 16; j++){
                    document.getElementById('p' + i + '-a' + j).style.backgroundColor = 'black';
                }
            }
            let time = new Date;
            let hour = time.getHours();
            let minute = time.getMinutes();
            let second = time.getSeconds();
            let strhour = hour.toString();
            let strminute = minute.toString();
            let strsecond = second.toString();

            if(hour >= 10){
                switch(strhour[0]){
                case '0':
                    zero(1);
                break;
                case '1':
                    one(1);
                break;
                case '2':
                    two(1);
                break;
                }

                switch(strhour[1]){
                case '0':
                    zero(2);
                break;
                case '1':
                    one(2);
                break;
                case '2':
                    two(2);
                break;
                case '3':
                    three(2);
                break;
                case '4':
                    four(2);
                break;
                case '5':
                    five(2);
                break;
                case '6':
                    six(2);
                break;
                case '7':
                    seven(2);
                break;
                case '8':
                    eight(2);
                break;
                case '9':
                    nine(2);
                break;
            }
            }else{
                zero(1);
                switch(strhour[0]){
                case '0':
                    zero(2);
                break;
                case '1':
                    one(2);
                break;
                case '2':
                    two(2);
                break;
                case '3':
                    three(2);
                break;
                case '4':
                    four(2);
                break;
                case '5':
                    five(2);
                break;
                case '6':
                    six(2);
                break;
                case '7':
                    seven(2);
                break;
                case '8':
                    eight(2);
                break;
                case '9':
                    nine(2);
                break;
                }
            }

            if(minute >= 10){
                switch(strminute[0]){
                case '0':
                    zero(3);
                break;
                case '1':
                    one(3);
                break;
                case '2':
                    two(3);
                break;
                case '3':
                    three(3);
                break;
                case '4':
                    four(3);
                break;
                case '5':
                    five(3);
                break;
                case '6':
                    six(3);
                break;
                }

                switch(strminute[1]){
                case '0':
                    zero(4);
                break;
                case '1':
                    one(4);
                break;
                case '2':
                    two(4);
                break;
                case '3':
                    three(4);
                break;
                case '4':
                    four(4);
                break;
                case '5':
                    five(4);
                break;
                case '6':
                    six(4);
                break;
                case '7':
                    seven(4);
                break;
                case '8':
                    eight(4);
                break;
                case '9':
                    nine(4);
                break;
            }
            }else{
                zero(3);
                switch(strminute[0]){
                case '0':
                    zero(4);
                break;
                case '1':
                    one(4);
                break;
                case '2':
                    two(4);
                break;
                case '3':
                    three(4);
                break;
                case '4':
                    four(4);
                break;
                case '5':
                    five(4);
                break;
                case '6':
                    six(4);
                break;
                }
            }

            if(second >= 10){
                switch(strsecond[0]){
                case '0':
                    zero(5);
                break;
                case '1':
                    one(5);
                break;
                case '2':
                    two(5);
                break;
                case '3':
                    three(5);
                break;
                case '4':
                    four(5);
                break;
                case '5':
                    five(5);
                break;
                case '6':
                    six(5);
                break;
                }

                switch(strsecond[1]){
                case '0':
                    zero(6);
                break;
                case '1':
                    one(6);
                break;
                case '2':
                    two(6);
                break;
                case '3':
                    three(6);
                break;
                case '4':
                    four(6);
                break;
                case '5':
                    five(6);
                break;
                case '6':
                    six(6);
                break;
                case '7':
                    seven(6);
                break;
                case '8':
                    eight(6);
                break;
                case '9':
                    nine(6);
                break;
            }
            }else{
                zero(5);
                switch(strsecond[0]){
                case '0':
                    zero(6);
                break;
                case '1':
                    one(6);
                break;
                case '2':
                    two(6);
                break;
                case '3':
                    three(6);
                break;
                case '4':
                    four(6);
                break;
                case '5':
                    five(6);
                break;
                case '6':
                    six(6);
                break;
                case '7':
                    seven(6);
                break;
                case '8':
                    eight(6);
                break;
                case '9':
                    nine(6);
                break;
                }
            }
        }

        setInterval(clock, 1000)