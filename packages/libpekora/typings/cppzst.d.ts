/// <reference types="node" />
import stream from 'stream'

declare module 'cppzst' {
	export interface zstdCompressParameters {
		level: number
		dict: Buffer
		dictSize: number
	}
	export interface zstdDecompressParameters {
		dict: Buffer
		dictSize: number
	}
	export function compress(
		buffer: Buffer,
		zstdCompressParameters?: zstdCompressParameters
	): Promise<Buffer>
	export function compress(
		buffer: Buffer,
		callback: (error: Error, result: Buffer) => any
	): null
	export function compress(
		buffer: Buffer,
		zstdCompressParameters: zstdCompressParameters,
		callback: (error: Error, result: Buffer) => any
	): null
	export function decompress(
		buffer: Buffer,
		zstdCompressParameters?: zstdDecompressParameters
	): Promise<Buffer>
	export function decompress(
		buffer: Buffer,
		callback: (error: Error, result: Buffer) => any
	): null
	export function decompress(
		buffer: Buffer,
		zstdCompressParameters: zstdDecompressParameters,
		callback: (error: Error, result: Buffer) => any
	): null
	export function compressStream(
		zstdCompressParameters: zstdCompressParameters
	): stream.Duplex
	export function decompressStream(
		zstdDecompressParameters: zstdDecompressParameters
	): stream.Duplex
}
