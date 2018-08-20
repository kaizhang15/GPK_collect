
        // var input_sequence = "82 r Down 0, 84 t Down 85, 82 r Up 94, 89 y Down 153, 84 t Up 158, 89 y Up 230, 71 g Down 245, 71 g Up 302, 70 f Down 303, 70 f Up 396, 70 f Down 449, 70 f Up 490, 66 b Down 542, 66 b Up 573, 78 n Down 586, 78 n Up 628,"
        var possibilities_matrix =
            ([
                [0.03770379664656842, 0.17307495319408892, 0.0005533280179843366, 0.12594712473687936, 0.05276610692300337, 5e-324, 0.05589243656724333, 0.2970944853560869],
                [0.000970469595655335, 0.0, 0.09516045067384774, 0.0, 0.453445658881153, 1e-323, 0.02473244158664531, 0.0],
                [0.00206793113596896, 0.0, 0.027972972684062816, 0.0, 0.4139887303392133, 0.12576965190903452, 0.10584032355772832, 1e-323],
                [0.27041611701317575, 0.0, 0.10771948354780038, 0.0004155370218668685, 0.019414751439981878, 0.2970785543842654, 0.01799515537635323, 0.0],
                [0.14903844680560857, 2.219258015961905e-05, 0.0, 0.4152696370521127, 0.0, 0.043845336408301495, 0.0, 0.02274892747591698],
                [1.6227662841914765e-06, 1.7081113374990834e-06, 0.15981230299165172, 0.0020988356476303893, 0.13389948717109051, 0.006500704969771409, 0.3645453202829027, 0.00010703216022986203],
                [6.314975033737933e-31, 0.0, 9.078035335161675e-34, 0.4745967234841955, 0.00021627774417100652, 0.0043942190951970946, 0.007426633512256622, 0.003093611509762045],
                [0.0, 0.08575046235784103, 0.12231268663956635, 0.0, 0.05080118715133341, 0.0, 0.3959944829694605, 0.0],
                [1e-323, 0.09783935717147153, 0.005934622584030056, 4.597318902849971e-29, 0.0035671013906431854, 0.0, 0.4558554409660392, 0.012116644496036024],
                [0.0005152810423166748, 0.36053878264769196, 0.00039899314245063174, 0.025789424167187363, 1.8036614003473922e-15, 0.0, 0.19800051576523997, 0.10475450260537758],
                [0.0, 0.043623297796042446, 0.04750135775411708, 1e-323, 0.0, 3.4338131900822167e-06, 0.14210801529684533, 0.3752557043751245],
                [0.0, 0.13618758534177658, 0.11586656303443846, 0.3363218764273516, 1.7059833831921644e-11, 5e-324, 0.010802625909113898, 0.1329727005438258]
            ])
        var encode_keys = {
            "`": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "0": 10,
            "-": 11,
            "=": 12,
            //    second row
            "q": 13,
            "w": 14,
            "e": 15,
            "r": 16,
            "t": 17,
            "y": 18,
            "u": 19,
            "i": 20,
            "o": 21,
            "p": 22,
            "[": 23,
            "]": 24,
            "\\": 25,
            //    third row
            "a": 26,
            "s": 27,
            "d": 28,
            "f": 29,
            "g": 30,
            "h": 31,
            "j": 32,
            "k": 33,
            "l": 34,
            ";": 35,
            "'": 36,
            //  forth row
            "z": 39,
            "x": 40,
            "c": 41,
            "v": 42,
            "b": 43,
            "n": 44,
            "m": 45,
            ",": 46,
            ".": 47,
            "/": 48,
            // space
            "undefined": 53,
            "undefined1": 54,
            "undefined2": 55,
            "undefined3": 56,
            "undefined4": 57,
            "undefined5": 58,
            "undefined6": 59,
            "undefined_": 60,
        }
        var decode_keys = {
            0: "`",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "0",
            11: "-",
            12: "=",
            // second row
            13: "q",
            14: "w",
            15: "e",
            16: "r",
            17: "t",
            18: "y",
            19: "u",
            20: "i",
            21: "o",
            22: "p",
            23: "[",
            24: "]",
            25: "\\",
            // third row
            26: "a",
            27: "s",
            28: "d",
            29: "f",
            30: "g",
            31: "h",
            32: "j",
            33: "k",
            34: "l",
            35: ";",
            36: "'",
            //  forth row
            39: "z",
            40: "x",
            41: "c",
            42: "v",
            43: "b",
            44: "n",
            45: "m",
            46: ",",
            47: ".",
            48: "/",
            // space
            53: "undefined",
            54: "undefined1",
            55: "undefined2",
            56: "undefined3",
            57: "undefined4",
            58: "undefined5",
            59: "undefined6",
            60: "undefined_",
            //    "undefined7" : 60,
        }
        var position = {
            /*
                This function reflects the position of every key
                get the data from a svg file
            */
            "0": [341, -96],
            "1": [74, -96],
            "2": [104, -96],
            "3": [133, -96],
            "4": [163, -96],
            "5": [193, -96],
            "6": [222, -96],
            "7": [252, -96],
            "8": [282, -96],
            "9": [311, -96],
            "a": [100, -147],
            "b": [230, -172],
            "c": [171, -172],
            "d": [159, -147],
            "e": [151, -121],
            "f": [189, -147],
            "g": [218, -147],
            "h": [248, -147],
            "i": [300, -121],
            "j": [278, -147],
            "k": [307, -147],
            "l": [337, -147],
            "m": [290, -172],
            "n": [260, -172],
            "o": [330, -121],
            "p": [360, -121],
            "q": [92, -121],
            "r": [181, -121],
            "s": [129, -147],
            "t": [211, -121],
            "u": [271, -121],
            "v": [201, -172],
            "w": [121, -121],
            "x": [141, -172],
            "y": [241, -121],
            "z": [111, -172],
            "-": [371, -96],
            "=": [401, -96],
            "`": [44, -96],
            "[": [390, -121],
            "]": [419, -121],
            "|": [431, -96],
            ";": [367, -147],
            "\'": [396, -147],
            "<": [319, -172],
            ",": [319, -172],
            ".": [349, -172],
            "/": [379, -172],
            "\\": [448, -121],
            // split the space in to 7 buttons, which they have the x location of e r t y u i o
            "undefined": [151, -198], // e
            "undefined1": [181, -198], // r
            "undefined2": [211, -198], // t
            "undefined3": [241, -198], // y
            "undefined4": [271, -198], // u
            "undefined5": [300, -198], // i
            "undefined6": [330, -198], //o
            "undefined_": [240.7, -198] // mean of undefined - undefined6
                //    "undefined7" : [,-198],
        }


        var clustered_centroids = ([
            [-77.8, 25], //  0
            [-42.64516129, 25.32258065], // 1
            [-12.53125, 25.34375], // 2
            [17.53333333, 25.36666667], // 3
            [50.05, 25.55], // 4
            [-29.67741935, 0], // 5
            [29.7, 0], // 6
            [-49.77777778, -25.66666667], // 7
            [-19.96428571, -25.64285714], // 8
            [11.97368421, -25.47368421], // 9
            [42.13888889, -25.44444444], // 10
            [77.81818182, -25] // 11
        ])


        var dictionary = {
            "0": ["537642", "673542"],
            "1": ["6161", "6776"],
            "2": ["53763"],
            "3": ["537623762"],
            "4": ["6633461"],
            "5": ["1376203"],
            "6": ["6673542"],
            "7": ["333666"],
            "8": ["61776245504"],
            "9": ["26173011", "263011"],
            "一": ["3333"],
            "丿": ["7666"],
            "乀": ["6777"],
            "┐": ["3331", "3337"],
            "└": ["616133"],
        }

        var dict_index = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "一", "丿", "乀", "┐", "└"]

        // var label = predict(input_sequence)





        function predict(input_sequence, true_label) {
            var distance = []
            for (var j = 0; j < dict_index.length; j++) {
                var min_value = 999999
                for (var dict_len = 0; dict_len < dictionary[dict_index[j]].length; dict_len++) {
                    var temp_distance = (dtw(divide_single_vector(splite_sequence((remove_last_dot(trim(input_sequence))))), dictionary[dict_index[j]][dict_len]))
                    if (temp_distance < min_value) {
                        min_value = temp_distance
                    }
                }
            distance[j] = min_value
            }
            var min = distance[0]
            var min_index = 0
            for (var i = 0; i < distance.length; i++) {
                if (distance[i] < min) {
                    min = distance[i]
                    min_index = i
                }
            }
            var second_min = 1000009
            var second_min_index = 0
            for( var i = 0; i< distance.length ;i ++){
                if(i == min_index){
                    continue
                }else{
                    if(distance[i] < second_min){
                        second_min_index = i
                        second_min = distance[i]
                    }
                }
            }
            // document.write(distance)
            // document.write("estimated label:" + dict_index[min_index])

            return [dict_index[min_index], dict_index[second_min_index]]
        }
        // var matrix = splite_sequence(remove_last_dot(trim(input_sequence)))
        // for (var i = 0; i < matrix.length; i++) {
        //     document.write(matrix[i] + "</br>")
        // }
        // document.write("</br>simplified</br>")

        // var simplified_matrix = max_cover_simplify(matrix)
        //     // for (var i = 0; i < simplified_matrix.length; i++) {
        // vector_sequence = divide_single_vector(simplified_matrix)
        // document.write(vector_sequence + "</br>")

        // var distance = []
        //     // var distance_index = 0
        // for (var match = 0; match < dict_index.length; match++) {
        //     distance[match] = dtw(vector_sequence, dictionary[dict_index[match]])
        // }
        // var min = distance[0]
        // var distance_min_index = 0
        // for (var i = 0; i < distance.length; i++) {
        //     if (distance[i] < min) {
        //         min = distance[i]
        //         distance_min_index = i
        //     }
        //     document.write(distance[i] + "</br>")
        // }
        // document.write("estimated label:" + dict_index[distance_min_index])


        function dtw(x, y) {
            var p_matrix = new Array()
            for (var row = 0; row < y.length; row++) {
                p_matrix[row] = new Array()
            }
            for (var i = 0; i < y.length; i++) {
                for (var j = 0; j < x.length; j++) {
                    p_matrix[i][j] = get_possibility(y[i], x[j])
                }
            }
            var d_matrix = new Array()
            for (var row = 0; row < y.length + 1; row++) {
                d_matrix[row] = new Array()
            }
            for (var i = 0; i < y.length + 1; i++) {
                for (var j = 0; j < x.length + 1; j++) {
                    d_matrix[i][j] = 0
                }
            }
            for (var i = 1; i < x.length + 1; i++) {
                d_matrix[0][i] = 999999
            }
            for (var j = 1; j < y.length + 1; j++) {
                d_matrix[j][0] = 999999
            }

            for (var j = 1; j < y.length + 1; j++) {
                for (var i = 1; i < x.length + 1; i++) {
                    d_matrix[j][i] = p_matrix[j - 1][i - 1] + Math.min(d_matrix[j - 1][i], d_matrix[j][i - 1], d_matrix[j - 1][i - 1] + p_matrix[j - 1][i - 1])
                }
            }
            // for (var one = 0; one < y.length + 1; one++) {
            //     for (var two = 1; two < x.length + 1; two++) {
            //         document.write(d_matrix[one][two] + " ")
            //     }
            //     document.write("<br>")
            // }
            return d_matrix[y.length][x.length]

        }

        function get_possibility(first, second) {
            // return possibilities_matrix[parseInt(first)][parseInt(second)]
            temp = possibilities_matrix[parseInt(second)][parseInt(first)]
            if (temp == 0) {
                return 999999
            } else {
                return -Math.log(temp)
            }

        }

        function divide_single_vector(input_seq) {
            var temp = []
            var i = 0
            for (var index = 0; index < input_seq.length - 1; index++) {
                index_next = index + 1
                var string_one
                var string_two
                if (input_seq[index][1] == "undefined") {
                    string_one = "undefined_"
                } else {
                    string_one = input_seq[index][1]
                }
                if (input_seq[index_next][1] == "undefined") {
                    string_two = "undefined_"
                } else {
                    string_two = input_seq[index_next][1]
                }
                temp[i] = (map_to_centroids(get_vector(encode_keys[string_one], encode_keys[string_two])))
                i++
            }
            return temp
        }

        function max_cover_simplify(matrix) {
            /*
                使用占比筛选掉一部分多余的vector
            */
            var simplified_matrix = []
            simplified_matrix[0] = matrix[0]
            var index = 1
            for (var i = 1; i < matrix.length - 1; i++) {
                var replace_row = []
                var time_left = matrix[i - 1][3]
                var duration = matrix[i][4]
                var overlap_l = 0
                if (matrix[i][2] > time_left) {
                    overlap_l = 0
                } else {
                    overlap_l = time_left - matrix[i][2]
                }
                if (overlap_l > 0.2 * duration) {
                    continue
                } else {
                    simplified_matrix[index] = matrix[i]
                    index++
                }
            }
            simplified_matrix[index] = matrix[matrix.length - 1]
            return simplified_matrix
        }


        function splite_sequence(input_sequence) {
            var result_matrix = []
            var matrix_index = 0
            var splited_sequence = input_sequence.split(",")
                // console.log(splited_sequence)

            var individual_split_by_space = []
            for (var i = 0; i < splited_sequence.length; i++) {
                individual_split_by_space[i] = trim(splited_sequence[i]).split(" ")
            }
            // document.write(individual_split_by_space[0][0])
            for (var i = 0; i < individual_split_by_space.length - 1; i++) {
                var temp_list = []

                if (individual_split_by_space[i][2] == "Down") {
                    var key = individual_split_by_space[i][1]
                    for (var j = i + 1; j < individual_split_by_space.length; j++) {
                        if (individual_split_by_space[j][1] == key && individual_split_by_space[j][2] == "Up") {
                            temp_list[0] = parseInt(individual_split_by_space[j][0])
                            temp_list[1] = individual_split_by_space[j][1]
                            temp_list[2] = parseInt(individual_split_by_space[i][3])
                            temp_list[3] = parseInt(individual_split_by_space[j][3])
                            temp_list[4] = temp_list[3] - temp_list[2]
                            result_matrix[matrix_index] = temp_list
                            matrix_index++
                            break
                        }
                    }
                }
            }
            return result_matrix
        }

        function get_vector(one, two) {
            x = position[decode_keys[two]][0] - position[decode_keys[one]][0]
            y = position[decode_keys[two]][1] - position[decode_keys[one]][1]
            return [x, y]
        }

        function map_to_centroids(vector) {
            /* 
            pass in a list with two characters
            return the closest vector to represent the input 
            if the input contains space,
            the space should map to the exact location among the 7 space keys
            */
            var distance = []
            first = vector[0]
            second = vector[1]
            for (var i = 0; i < 12; i++) {
                distance[i] = Math.pow((first - clustered_centroids[i][0]), 2) + Math.pow((second - clustered_centroids[i][1]), 2)
            }
            var min = distance[0]
            var min_index = 0
            for (var index = 1; index < 12; index++) {
                if (distance[index] < min) {
                    min_index = index
                    min = distance[index]
                }
            }

            return min_index
        }

        function trim(str) { //删除左右两端的空格
            　　
            return str.replace(/(^\s*)|(\s*$)/g, "");　　
        }

        function remove_last_dot(str) { // 删除最后一个逗号
            return str.slice(0, str.length - 1)
        }
