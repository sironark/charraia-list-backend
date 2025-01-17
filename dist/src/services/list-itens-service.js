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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listService = void 0;
var locked_error_1 = require("../errors/locked-error");
var not_found_error_1 = require("../errors/not-found-error");
var list_itens_repository_1 = require("../repositories/list-itens-repository");
function getItens() {
    return __awaiter(this, void 0, void 0, function () {
        var listItens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, list_itens_repository_1.listRepository.getItens()];
                case 1:
                    listItens = _a.sent();
                    return [2 /*return*/, listItens];
            }
        });
    });
}
function getItemById(gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, list_itens_repository_1.listRepository.getItemById(gameId)];
                case 1:
                    item = _a.sent();
                    if (!item)
                        throw (0, not_found_error_1.notFoundError)('Item não encontrado.');
                    return [2 /*return*/, item];
            }
        });
    });
}
function createItens(body) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, list_itens_repository_1.listRepository.createItens(body)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user];
            }
        });
    });
}
function editQuantity(id) {
    return __awaiter(this, void 0, void 0, function () {
        var idExists, answare;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, list_itens_repository_1.listRepository.getItemById(id)];
                case 1:
                    idExists = _a.sent();
                    if (!idExists)
                        throw (0, not_found_error_1.notFoundError)('Item não encontrado!');
                    console.log(idExists);
                    if (idExists.quantity <= 0)
                        throw (0, locked_error_1.lockedError)('item não pode ser selecionado pois já foi reservado por outra pessoa.');
                    return [4 /*yield*/, list_itens_repository_1.listRepository.editQuantity(id)];
                case 2:
                    answare = _a.sent();
                    return [2 /*return*/, answare];
            }
        });
    });
}
/*
async function editGame(gameId: number, gameName: string) {
  const idExists = await gameRepository.getGameById(gameId);
  if (!idExists) throw notFoundError('Game not found!');

  const nameRepeated = await gameRepository.getGameByName(gameName);
  if (nameRepeated) throw conflictError('Name game already exists!');

  const game = await gameRepository.editGame(gameId, gameName);
  return game;
}

async function deleteGame(gameId: number) {
  const idExists = await gameRepository.getGameById(gameId);
  if (!idExists) throw notFoundError('Game not found!');

  const game = await gameRepository.deleteGame(gameId);
  return game;
}*/
exports.listService = {
    getItemById: getItemById,
    getItens: getItens,
    createItens: createItens,
    editQuantity: editQuantity,
};
