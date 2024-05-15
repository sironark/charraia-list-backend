"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editQuantity = exports.createItem = exports.getItemById = exports.getItens = void 0;
var http_status_1 = __importDefault(require("http-status"));
var list_itens_service_1 = require("../services/list-itens-service");
var invalid_param_error_1 = require("../errors/invalid-param-error");
function getItens(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var listItens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, list_itens_service_1.listService.getItens()];
                case 1:
                    listItens = _a.sent();
                    res.status(http_status_1.default.OK).send(listItens);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getItens = getItens;
function getItemById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    if (!id || isNaN(id) || id < 1)
                        throw (0, invalid_param_error_1.invalidParamError)('Id param not valid!');
                    return [4 /*yield*/, list_itens_service_1.listService.getItemById(id)];
                case 1:
                    item = _a.sent();
                    res.status(http_status_1.default.OK).send(item);
                    return [2 /*return*/];
            }
        });
    });
}
exports.getItemById = getItemById;
function createItem(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = req.body;
                    return [4 /*yield*/, list_itens_service_1.listService.createItens(body)];
                case 1:
                    response = _a.sent();
                    res.status(http_status_1.default.CREATED).send(response);
                    return [2 /*return*/];
            }
        });
    });
}
exports.createItem = createItem;
function editQuantity(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, answare;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    if (!id || isNaN(id) || id < 1)
                        throw (0, invalid_param_error_1.invalidParamError)('Id param not valid!');
                    return [4 /*yield*/, list_itens_service_1.listService.editQuantity(id)];
                case 1:
                    answare = _a.sent();
                    res.status(http_status_1.default.OK).send(answare);
                    return [2 /*return*/];
            }
        });
    });
}
exports.editQuantity = editQuantity;
/*
export async function editGame(req: Request, res: Response) {
  const { name } = req.body as Omit<Game, 'id'>;

  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const game = await gameService.editGame(id, name);
  res.status(httpStatus.OK).send(game);
}

export async function deleteGame(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const game = await gameService.deleteGame(id);
  res.status(httpStatus.OK).send(game);
}
*/
