/**
 * Supported STOMP versions
 */
var Versions = /** @class */ (function () {
    /**
     * Takes an array of string of versions, typical elements '1.0', '1.1', or '1.2'
     *
     * You will an instance if this class if you want to override supported versions to be declared during
     * STOMP handshake.
     */
    function Versions(versions) {
        this.versions = versions;
    }
    Versions.prototype.supportedVersions = function () {
        return this.versions.join(',');
    };
    Versions.prototype.protocolVersions = function () {
        return this.versions.map(function (x) { return "v" + x.replace('.', '') + ".stomp"; });
    };
    /**
     * 1.0
     */
    Versions.V1_0 = '1.0';
    /**
     * 1.1
     */
    Versions.V1_1 = '1.1';
    /**
     * 1.2
     */
    Versions.V1_2 = '1.2';
    /**
     * @internal
     */
    Versions.default = new Versions([Versions.V1_0, Versions.V1_1, Versions.V1_2]);
    return Versions;
}());
export { Versions };
//# sourceMappingURL=versions.js.map