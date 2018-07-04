'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* globals VK, Handlebars, svg4everybody */

(function () {
    'use strict';

    svg4everybody();

    VK.init({
        apiId: 6487685
    });

    function loadState() {
        var data = JSON.parse(storage.data);

        renderFriends(data.rightItems, filterZone);
        renderFriends(data.leftItems);
    }

    function auth() {
        return new Promise(function (resolve, reject) {
            VK.Auth.login(function (data) {
                if (data.session) {
                    resolve();
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, 2);
        });
    }

    function callAPI(method, params) {
        params.v = '5.76';

        return new Promise(function (resolve, reject) {
            VK.api(method, params, function (data) {
                if (data.error) {
                    reject(data.error);
                } else {
                    resolve(data.response);
                }
            });
        });
    }

    var resultZone = document.getElementById('js-results');
    var filterZone = document.getElementById('js-filter-zone');
    var storage = sessionStorage;

    function renderFriends(friends) {
        var zone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : resultZone;

        var template = void 0;

        zone.innerHTML = '';

        if (zone == resultZone) {
            template = document.querySelector('#template-left').textContent;
        } else {
            template = document.querySelector('#template-right').textContent;
        }

        var render = Handlebars.compile(template);
        var html = render(friends);

        zone.innerHTML = html;
    }

    auth().then(function () {
        return callAPI('friends.get', { fields: 'city, country, photo_100' });
    }).then(function (response) {

        if (localStorage.data) {
            storage = localStorage;
            loadState();
            var data = JSON.parse(storage.data),
                filteredItems = data.rightItems;

            response = data.leftItems;

            renderFriends(filteredItems, filterZone);
            storage = sessionStorage;
        } else {
            renderFriends(response);
        }

        return response;
    }).then(function (response) {
        var currentDrag = void 0;

        document.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('icon-plus')) {
                var item = e.target.parentElement.parentElement;

                toggleIcon(e.target);
                filterZone.insertBefore(item, filterZone.lastElementChild);
                saveState();
            } else if (e.target.parentElement.classList.contains('icon-times')) {
                var _item = e.target.parentElement.parentElement;

                toggleIcon(e.target);
                resultZone.insertBefore(_item, resultZone.lastElementChild);
                saveState();
            } else if (e.target.id == 'js-btn-save') {
                storage = localStorage;
                saveState();
                alert('Сохранение выполнено');
            }
        });

        document.addEventListener('dragstart', function (e) {
            var zone = getCurrentZone(e.target);

            if (zone) {
                currentDrag = { startZone: zone, node: e.target };
            }
        });

        document.addEventListener('dragover', function (e) {
            var zone = getCurrentZone(e.target);

            if (zone) {
                e.preventDefault();
            }
        });

        document.addEventListener('drop', function (e) {
            if (currentDrag) {
                var zone = getCurrentZone(e.target);

                e.preventDefault();

                toggleIcon(currentDrag.node.querySelector('use'));
                zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                currentDrag = null;
                saveState();
            }
        });

        document.addEventListener('input', function (e) {
            var value = e.target.value;

            var filtered = {
                items: []
            };

            if (e.target.id == 'js-input-left') {
                filtered.items = filterList(response.items, value);
                renderFriends(filtered);
            } else {
                var data = JSON.parse(storage.data);

                filtered.items = filterList(data.rightItems.items, value);
                renderFriends(filtered, filterZone);
            }
        });

        function getCurrentZone(from) {
            do {
                if (from.classList.contains('main__drop-zone')) {
                    return from;
                }
            } while (from = from.parentElement);

            return null;
        }

        function toggleIcon(target) {
            if (target.parentElement.classList.contains('icon-plus')) {
                target.setAttribute('xlink:href', '/assets/img/sprites/sprite.svg#times');
                target.parentElement.classList.add('icon-times');
                target.parentElement.classList.remove('icon-plus');
            } else if (target.parentElement.classList.contains('icon-times')) {
                target.setAttribute('xlink:href', '/assets/img/sprites/sprite.svg#plus');
                target.parentElement.classList.add('icon-plus');
                target.parentElement.classList.remove('icon-times');
            }
        }

        function filterList(arr, value) {
            var result = arr.filter(function (friend) {
                var fullName = friend.first_name + ' ' + friend.last_name;

                return fullName.toUpperCase().includes(value.toUpperCase());
            });

            return result;
        }

        function itemsToArray(zone, array) {
            for (var i = 0; zone.children.length > i; i++) {
                var item = {
                    id: 0,
                    first_name: '',
                    last_name: '',
                    photo_100: ''
                };

                item.id = zone.children[i].dataset.id;
                item.photo_100 = zone.children[i].querySelector('.main__img').getAttribute('src');

                var _zone$children$i$quer = zone.children[i].querySelector('.main__name').textContent.split(' ');

                var _zone$children$i$quer2 = _slicedToArray(_zone$children$i$quer, 2);

                item.first_name = _zone$children$i$quer2[0];
                item.last_name = _zone$children$i$quer2[1];

                array.push(item);
            }
        }

        function saveState() {
            var rightZoneItems = [];
            var leftZoneItems = [];

            itemsToArray(filterZone, rightZoneItems);
            itemsToArray(resultZone, leftZoneItems);

            storage.data = JSON.stringify({
                leftItems: {
                    items: leftZoneItems
                },
                rightItems: {
                    items: rightZoneItems
                }
            });
        }
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwiVksiLCJpbml0IiwiYXBpSWQiLCJsb2FkU3RhdGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic3RvcmFnZSIsInJlbmRlckZyaWVuZHMiLCJyaWdodEl0ZW1zIiwiZmlsdGVyWm9uZSIsImxlZnRJdGVtcyIsImF1dGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkF1dGgiLCJsb2dpbiIsInNlc3Npb24iLCJFcnJvciIsImNhbGxBUEkiLCJtZXRob2QiLCJwYXJhbXMiLCJ2IiwiYXBpIiwiZXJyb3IiLCJyZXNwb25zZSIsInJlc3VsdFpvbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Vzc2lvblN0b3JhZ2UiLCJmcmllbmRzIiwiem9uZSIsInRlbXBsYXRlIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicmVuZGVyIiwiSGFuZGxlYmFycyIsImNvbXBpbGUiLCJodG1sIiwidGhlbiIsImZpZWxkcyIsImxvY2FsU3RvcmFnZSIsImZpbHRlcmVkSXRlbXMiLCJjdXJyZW50RHJhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaXRlbSIsInRvZ2dsZUljb24iLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwic2F2ZVN0YXRlIiwiaWQiLCJhbGVydCIsImdldEN1cnJlbnRab25lIiwic3RhcnRab25lIiwibm9kZSIsInByZXZlbnREZWZhdWx0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidmFsdWUiLCJmaWx0ZXJlZCIsIml0ZW1zIiwiZmlsdGVyTGlzdCIsImZyb20iLCJzZXRBdHRyaWJ1dGUiLCJhZGQiLCJyZW1vdmUiLCJhcnIiLCJyZXN1bHQiLCJmaWx0ZXIiLCJmdWxsTmFtZSIsImZyaWVuZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwiaXRlbXNUb0FycmF5IiwiYXJyYXkiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJwaG90b18xMDAiLCJkYXRhc2V0IiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJwdXNoIiwicmlnaHRab25lSXRlbXMiLCJsZWZ0Wm9uZUl0ZW1zIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsQ0FBQyxZQUFXO0FBQ1I7O0FBRUFBOztBQUVBQyxPQUFHQyxJQUFILENBQVE7QUFDSkMsZUFBTztBQURILEtBQVI7O0FBSUEsYUFBU0MsU0FBVCxHQUFxQjtBQUNqQixZQUFJQyxPQUFPQyxLQUFLQyxLQUFMLENBQVdDLFFBQVFILElBQW5CLENBQVg7O0FBRUFJLHNCQUFjSixLQUFLSyxVQUFuQixFQUErQkMsVUFBL0I7QUFDQUYsc0JBQWNKLEtBQUtPLFNBQW5CO0FBQ0g7O0FBRUQsYUFBU0MsSUFBVCxHQUFnQjtBQUNaLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ2YsZUFBR2dCLElBQUgsQ0FBUUMsS0FBUixDQUFjLGdCQUFRO0FBQ2xCLG9CQUFJYixLQUFLYyxPQUFULEVBQWtCO0FBQ2RKO0FBQ0gsaUJBRkQsTUFFTztBQUNIQywyQkFBTyxJQUFJSSxLQUFKLENBQVUsMkJBQVYsQ0FBUDtBQUNIO0FBQ0osYUFORCxFQU1HLENBTkg7QUFPSCxTQVJNLENBQVA7QUFTSDs7QUFFRCxhQUFTQyxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDN0JBLGVBQU9DLENBQVAsR0FBVyxNQUFYOztBQUVBLGVBQU8sSUFBSVYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ2YsZUFBR3dCLEdBQUgsQ0FBT0gsTUFBUCxFQUFlQyxNQUFmLEVBQXVCLFVBQUNsQixJQUFELEVBQVU7QUFDN0Isb0JBQUlBLEtBQUtxQixLQUFULEVBQWdCO0FBQ1pWLDJCQUFPWCxLQUFLcUIsS0FBWjtBQUNILGlCQUZELE1BRU87QUFDSFgsNEJBQVFWLEtBQUtzQixRQUFiO0FBQ0g7QUFDSixhQU5EO0FBT0gsU0FSTSxDQUFQO0FBU0g7O0FBRUQsUUFBTUMsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBLFFBQU1uQixhQUFha0IsU0FBU0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBbkI7QUFDQSxRQUFJdEIsVUFBVXVCLGNBQWQ7O0FBRUEsYUFBU3RCLGFBQVQsQ0FBd0J1QixPQUF4QixFQUFrRDtBQUFBLFlBQWpCQyxJQUFpQix1RUFBWkwsVUFBWTs7QUFDOUMsWUFBSU0saUJBQUo7O0FBRUFELGFBQUtFLFNBQUwsR0FBaUIsRUFBakI7O0FBRUEsWUFBSUYsUUFBUUwsVUFBWixFQUF3QjtBQUNwQk0sdUJBQVdMLFNBQVNPLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxXQUFwRDtBQUNILFNBRkQsTUFFTztBQUNISCx1QkFBV0wsU0FBU08sYUFBVCxDQUF1QixpQkFBdkIsRUFBMENDLFdBQXJEO0FBQ0g7O0FBRUQsWUFBTUMsU0FBU0MsV0FBV0MsT0FBWCxDQUFtQk4sUUFBbkIsQ0FBZjtBQUNBLFlBQU1PLE9BQU9ILE9BQU9OLE9BQVAsQ0FBYjs7QUFFQUMsYUFBS0UsU0FBTCxHQUFpQk0sSUFBakI7QUFDSDs7QUFFRDVCLFdBQ0M2QixJQURELENBQ00sWUFBTTtBQUNSLGVBQU9yQixRQUFRLGFBQVIsRUFBdUIsRUFBRXNCLFFBQVEsMEJBQVYsRUFBdkIsQ0FBUDtBQUNILEtBSEQsRUFJQ0QsSUFKRCxDQUlNLG9CQUFZOztBQUVkLFlBQUlFLGFBQWF2QyxJQUFqQixFQUF1QjtBQUNuQkcsc0JBQVVvQyxZQUFWO0FBQ0F4QztBQUNBLGdCQUFJQyxPQUFPQyxLQUFLQyxLQUFMLENBQVdDLFFBQVFILElBQW5CLENBQVg7QUFBQSxnQkFDSXdDLGdCQUFnQnhDLEtBQUtLLFVBRHpCOztBQUdBaUIsdUJBQVd0QixLQUFLTyxTQUFoQjs7QUFFQUgsMEJBQWNvQyxhQUFkLEVBQTZCbEMsVUFBN0I7QUFDQUgsc0JBQVV1QixjQUFWO0FBQ0gsU0FWRCxNQVVPO0FBQ0h0QiwwQkFBY2tCLFFBQWQ7QUFDSDs7QUFFRCxlQUFPQSxRQUFQO0FBQ0gsS0FyQkQsRUFxQkdlLElBckJILENBcUJRLFVBQUNmLFFBQUQsRUFBYztBQUNsQixZQUFJbUIsb0JBQUo7O0FBRUFqQixpQkFBU2tCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLGFBQUs7QUFDcEMsZ0JBQUlDLEVBQUVDLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkMsU0FBdkIsQ0FBaUNDLFFBQWpDLENBQTBDLFdBQTFDLENBQUosRUFBNEQ7QUFDeEQsb0JBQU1DLE9BQU9MLEVBQUVDLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkEsYUFBcEM7O0FBRUFJLDJCQUFXTixFQUFFQyxNQUFiO0FBQ0F0QywyQkFBVzRDLFlBQVgsQ0FBd0JGLElBQXhCLEVBQThCMUMsV0FBVzZDLGdCQUF6QztBQUNBQztBQUVILGFBUEQsTUFPTyxJQUFJVCxFQUFFQyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJDLFNBQXZCLENBQWlDQyxRQUFqQyxDQUEwQyxZQUExQyxDQUFKLEVBQTZEO0FBQ2hFLG9CQUFNQyxRQUFPTCxFQUFFQyxNQUFGLENBQVNDLGFBQVQsQ0FBdUJBLGFBQXBDOztBQUVBSSwyQkFBV04sRUFBRUMsTUFBYjtBQUNBckIsMkJBQVcyQixZQUFYLENBQXdCRixLQUF4QixFQUE4QnpCLFdBQVc0QixnQkFBekM7QUFDQUM7QUFFSCxhQVBNLE1BT0EsSUFBSVQsRUFBRUMsTUFBRixDQUFTUyxFQUFULElBQWUsYUFBbkIsRUFBa0M7QUFDckNsRCwwQkFBVW9DLFlBQVY7QUFDQWE7QUFDQUUsc0JBQU0sc0JBQU47QUFDSDtBQUNKLFNBcEJEOztBQXNCQTlCLGlCQUFTa0IsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDLGdCQUFNZixPQUFPMkIsZUFBZVosRUFBRUMsTUFBakIsQ0FBYjs7QUFFQSxnQkFBSWhCLElBQUosRUFBVTtBQUNOYSw4QkFBYyxFQUFFZSxXQUFXNUIsSUFBYixFQUFtQjZCLE1BQU1kLEVBQUVDLE1BQTNCLEVBQWQ7QUFDSDtBQUNKLFNBTkQ7O0FBUUFwQixpQkFBU2tCLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztBQUN6QyxnQkFBTWYsT0FBTzJCLGVBQWVaLEVBQUVDLE1BQWpCLENBQWI7O0FBRUEsZ0JBQUloQixJQUFKLEVBQVU7QUFDTmUsa0JBQUVlLGNBQUY7QUFDSDtBQUNKLFNBTkQ7O0FBUUFsQyxpQkFBU2tCLGdCQUFULENBQTBCLE1BQTFCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUNyQyxnQkFBSUYsV0FBSixFQUFpQjtBQUNiLG9CQUFNYixPQUFPMkIsZUFBZVosRUFBRUMsTUFBakIsQ0FBYjs7QUFFQUQsa0JBQUVlLGNBQUY7O0FBRUFULDJCQUFXUixZQUFZZ0IsSUFBWixDQUFpQjFCLGFBQWpCLENBQStCLEtBQS9CLENBQVg7QUFDQUgscUJBQUtzQixZQUFMLENBQWtCVCxZQUFZZ0IsSUFBOUIsRUFBb0NkLEVBQUVDLE1BQUYsQ0FBU2Usa0JBQTdDO0FBQ0FsQiw4QkFBYyxJQUFkO0FBQ0FXO0FBQ0g7QUFDSixTQVhEOztBQWFBNUIsaUJBQVNrQixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87QUFBQSxnQkFDOUJpQixLQUQ4QixHQUNwQmpCLEVBQUVDLE1BRGtCLENBQzlCZ0IsS0FEOEI7O0FBRXRDLGdCQUFJQyxXQUFXO0FBQ1hDLHVCQUFPO0FBREksYUFBZjs7QUFJQSxnQkFBSW5CLEVBQUVDLE1BQUYsQ0FBU1MsRUFBVCxJQUFlLGVBQW5CLEVBQW9DO0FBQ2hDUSx5QkFBU0MsS0FBVCxHQUFpQkMsV0FBV3pDLFNBQVN3QyxLQUFwQixFQUEyQkYsS0FBM0IsQ0FBakI7QUFDQXhELDhCQUFjeUQsUUFBZDtBQUNILGFBSEQsTUFHTztBQUNILG9CQUFJN0QsT0FBT0MsS0FBS0MsS0FBTCxDQUFXQyxRQUFRSCxJQUFuQixDQUFYOztBQUVBNkQseUJBQVNDLEtBQVQsR0FBaUJDLFdBQVcvRCxLQUFLSyxVQUFMLENBQWdCeUQsS0FBM0IsRUFBa0NGLEtBQWxDLENBQWpCO0FBQ0F4RCw4QkFBY3lELFFBQWQsRUFBd0J2RCxVQUF4QjtBQUNIO0FBRUosU0FoQkQ7O0FBa0JBLGlCQUFTaUQsY0FBVCxDQUF3QlMsSUFBeEIsRUFBOEI7QUFDMUIsZUFBRztBQUNDLG9CQUFJQSxLQUFLbEIsU0FBTCxDQUFlQyxRQUFmLENBQXdCLGlCQUF4QixDQUFKLEVBQWdEO0FBQzVDLDJCQUFPaUIsSUFBUDtBQUNIO0FBQ0osYUFKRCxRQUlTQSxPQUFPQSxLQUFLbkIsYUFKckI7O0FBTUEsbUJBQU8sSUFBUDtBQUNIOztBQUVELGlCQUFTSSxVQUFULENBQW9CTCxNQUFwQixFQUE0QjtBQUN4QixnQkFBSUEsT0FBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JDLFFBQS9CLENBQXdDLFdBQXhDLENBQUosRUFBMEQ7QUFDdERILHVCQUFPcUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyxzQ0FBbEM7QUFDQXJCLHVCQUFPQyxhQUFQLENBQXFCQyxTQUFyQixDQUErQm9CLEdBQS9CLENBQW1DLFlBQW5DO0FBQ0F0Qix1QkFBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JxQixNQUEvQixDQUFzQyxXQUF0QztBQUNILGFBSkQsTUFJTyxJQUFJdkIsT0FBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JDLFFBQS9CLENBQXdDLFlBQXhDLENBQUosRUFBMkQ7QUFDOURILHVCQUFPcUIsWUFBUCxDQUFvQixZQUFwQixFQUFrQyxxQ0FBbEM7QUFDQXJCLHVCQUFPQyxhQUFQLENBQXFCQyxTQUFyQixDQUErQm9CLEdBQS9CLENBQW1DLFdBQW5DO0FBQ0F0Qix1QkFBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JxQixNQUEvQixDQUFzQyxZQUF0QztBQUNIO0FBQ0o7O0FBRUQsaUJBQVNKLFVBQVQsQ0FBcUJLLEdBQXJCLEVBQTBCUixLQUExQixFQUFpQztBQUM3QixnQkFBTVMsU0FBU0QsSUFBSUUsTUFBSixDQUFZLGtCQUFVO0FBQ2pDLG9CQUFNQyxXQUFjQyxPQUFPQyxVQUFyQixTQUFtQ0QsT0FBT0UsU0FBaEQ7O0FBRUEsdUJBQU9ILFNBQVNJLFdBQVQsR0FBdUJDLFFBQXZCLENBQWdDaEIsTUFBTWUsV0FBTixFQUFoQyxDQUFQO0FBQ0gsYUFKYyxDQUFmOztBQU1BLG1CQUFPTixNQUFQO0FBQ0g7O0FBRUQsaUJBQVNRLFlBQVQsQ0FBdUJqRCxJQUF2QixFQUE2QmtELEtBQTdCLEVBQW9DO0FBQ2hDLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQm5ELEtBQUtvRCxRQUFMLENBQWNDLE1BQWQsR0FBdUJGLENBQXZDLEVBQTBDQSxHQUExQyxFQUErQztBQUMzQyxvQkFBSS9CLE9BQU87QUFDUEssd0JBQUksQ0FERztBQUVQb0IsZ0NBQVksRUFGTDtBQUdQQywrQkFBVyxFQUhKO0FBSVBRLCtCQUFXO0FBSkosaUJBQVg7O0FBT0FsQyxxQkFBS0ssRUFBTCxHQUFVekIsS0FBS29ELFFBQUwsQ0FBY0QsQ0FBZCxFQUFpQkksT0FBakIsQ0FBeUI5QixFQUFuQztBQUNBTCxxQkFBS2tDLFNBQUwsR0FBaUJ0RCxLQUFLb0QsUUFBTCxDQUFjRCxDQUFkLEVBQWlCaEQsYUFBakIsQ0FBK0IsWUFBL0IsRUFBNkNxRCxZQUE3QyxDQUEwRCxLQUExRCxDQUFqQjs7QUFUMkMsNENBVVB4RCxLQUFLb0QsUUFBTCxDQUFjRCxDQUFkLEVBQWlCaEQsYUFBakIsQ0FBK0IsYUFBL0IsRUFBOENDLFdBQTlDLENBQTBEcUQsS0FBMUQsQ0FBZ0UsR0FBaEUsQ0FWTzs7QUFBQTs7QUFVMUNyQyxxQkFBS3lCLFVBVnFDO0FBVXpCekIscUJBQUswQixTQVZvQjs7QUFXM0NJLHNCQUFNUSxJQUFOLENBQVd0QyxJQUFYO0FBQ0g7QUFDSjs7QUFFRCxpQkFBU0ksU0FBVCxHQUFxQjtBQUNqQixnQkFBSW1DLGlCQUFpQixFQUFyQjtBQUNBLGdCQUFJQyxnQkFBZ0IsRUFBcEI7O0FBRUFYLHlCQUFhdkUsVUFBYixFQUF5QmlGLGNBQXpCO0FBQ0FWLHlCQUFhdEQsVUFBYixFQUF5QmlFLGFBQXpCOztBQUVBckYsb0JBQVFILElBQVIsR0FBZUMsS0FBS3dGLFNBQUwsQ0FBZTtBQUMxQmxGLDJCQUFXO0FBQ1B1RCwyQkFBTzBCO0FBREEsaUJBRGU7QUFJMUJuRiw0QkFBWTtBQUNSeUQsMkJBQU95QjtBQURDO0FBSmMsYUFBZixDQUFmO0FBUUg7QUFDSixLQTdKRDtBQThKSCxDQTdORCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIFZLLCBIYW5kbGViYXJzLCBzdmc0ZXZlcnlib2R5ICovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpOyAgICBcclxuXHJcbiAgICBWSy5pbml0KHtcclxuICAgICAgICBhcGlJZDogNjQ4NzY4NVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFN0YXRlKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlckZyaWVuZHMoZGF0YS5yaWdodEl0ZW1zLCBmaWx0ZXJab25lKTtcclxuICAgICAgICByZW5kZXJGcmllbmRzKGRhdGEubGVmdEl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRoKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFZLLkF1dGgubG9naW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINCw0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y8nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGxBUEkobWV0aG9kLCBwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMudiA9ICc1Ljc2JztcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgVksuYXBpKG1ldGhvZCwgcGFyYW1zLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtcmVzdWx0cycpO1xyXG4gICAgY29uc3QgZmlsdGVyWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1maWx0ZXItem9uZScpO1xyXG4gICAgbGV0IHN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJGcmllbmRzIChmcmllbmRzLCB6b25lPXJlc3VsdFpvbmUpIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGU7XHJcblxyXG4gICAgICAgIHpvbmUuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGlmICh6b25lID09IHJlc3VsdFpvbmUpIHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGxhdGUtbGVmdCcpLnRleHRDb250ZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlLXJpZ2h0JykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlbmRlciA9IEhhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IHJlbmRlcihmcmllbmRzKTtcclxuXHJcbiAgICAgICAgem9uZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBhdXRoKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gY2FsbEFQSSgnZnJpZW5kcy5nZXQnLCB7IGZpZWxkczogJ2NpdHksIGNvdW50cnksIHBob3RvXzEwMCcgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZGF0YSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgICAgICBsb2FkU3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2UuZGF0YSksXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gZGF0YS5yaWdodEl0ZW1zO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBkYXRhLmxlZnRJdGVtczsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckZyaWVuZHMoZmlsdGVyZWRJdGVtcywgZmlsdGVyWm9uZSk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZW5kZXJGcmllbmRzKHJlc3BvbnNlKTtcclxuICAgICAgICB9ICAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnREcmFnO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tcGx1cycpKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGZpbHRlclpvbmUuaW5zZXJ0QmVmb3JlKGl0ZW0sIGZpbHRlclpvbmUubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXRpbWVzJykpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFpvbmUuaW5zZXJ0QmVmb3JlKGl0ZW0sIHJlc3VsdFpvbmUubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09ICdqcy1idG4tc2F2ZScpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfQodC+0YXRgNCw0L3QtdC90LjQtSDQstGL0L/QvtC70L3QtdC90L4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB6b25lID0gZ2V0Q3VycmVudFpvbmUoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHpvbmUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnID0geyBzdGFydFpvbmU6IHpvbmUsIG5vZGU6IGUudGFyZ2V0IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB6b25lID0gZ2V0Q3VycmVudFpvbmUoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHpvbmUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB6b25lID0gZ2V0Q3VycmVudFpvbmUoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVJY29uKGN1cnJlbnREcmFnLm5vZGUucXVlcnlTZWxlY3RvcigndXNlJykpO1xyXG4gICAgICAgICAgICAgICAgem9uZS5pbnNlcnRCZWZvcmUoY3VycmVudERyYWcubm9kZSwgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RHJhZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzYXZlU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdqcy1pbnB1dC1sZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQuaXRlbXMgPSBmaWx0ZXJMaXN0KHJlc3BvbnNlLml0ZW1zLCB2YWx1ZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyRnJpZW5kcyhmaWx0ZXJlZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQuaXRlbXMgPSBmaWx0ZXJMaXN0KGRhdGEucmlnaHRJdGVtcy5pdGVtcywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRnJpZW5kcyhmaWx0ZXJlZCwgZmlsdGVyWm9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRab25lKGZyb20pIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZyb20uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluX19kcm9wLXpvbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IHdoaWxlIChmcm9tID0gZnJvbS5wYXJlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVJY29uKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLXBsdXMnKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvYXNzZXRzL2ltZy9zcHJpdGVzL3Nwcml0ZS5zdmcjdGltZXMnKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24tdGltZXMnKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tcGx1cycpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ljb24tdGltZXMnKSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgneGxpbms6aHJlZicsICcvYXNzZXRzL2ltZy9zcHJpdGVzL3Nwcml0ZS5zdmcjcGx1cycpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbi1wbHVzJyk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLXRpbWVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbHRlckxpc3QgKGFyciwgdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXJyLmZpbHRlciggZnJpZW5kID0+IHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHtmcmllbmQuZmlyc3RfbmFtZX0gJHtmcmllbmQubGFzdF9uYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdWxsTmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvVXBwZXJDYXNlKCkpOyAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaXRlbXNUb0FycmF5ICh6b25lLCBhcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgem9uZS5jaGlsZHJlbi5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9fMTAwOiAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IHpvbmUuY2hpbGRyZW5baV0uZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGhvdG9fMTAwID0gem9uZS5jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yKCcubWFpbl9faW1nJykuZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICAgICAgICAgIFtpdGVtLmZpcnN0X25hbWUsIGl0ZW0ubGFzdF9uYW1lXSA9IHpvbmUuY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvcignLm1haW5fX25hbWUnKS50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2F2ZVN0YXRlKCkge1xyXG4gICAgICAgICAgICBsZXQgcmlnaHRab25lSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxlZnRab25lSXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1zVG9BcnJheShmaWx0ZXJab25lLCByaWdodFpvbmVJdGVtcyk7XHJcbiAgICAgICAgICAgIGl0ZW1zVG9BcnJheShyZXN1bHRab25lLCBsZWZ0Wm9uZUl0ZW1zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0b3JhZ2UuZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxlZnRJdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBsZWZ0Wm9uZUl0ZW1zXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRJdGVtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByaWdodFpvbmVJdGVtc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTsiXX0=
